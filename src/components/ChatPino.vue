<template>
  <div v-if="pinoId" class="chat-container">
    <h2>Chat do Pino</h2>
    <div>
      <button @click="toggleEntrada">{{ entrouNoGrupo ? 'Sair do Grupo' : 'Entrar no Grupo' }}</button>
      <span style="margin-left: 1rem;">Participantes: {{ participantes.length }}</span>
    </div>
    <div v-if="senhaNecessaria && !senhaCorreta">
      <input v-model="senhaDigitada" placeholder="Digite a senha do grupo" />
      <button @click="validarSenha">Entrar</button>
    </div>
    <div v-else>
      <div class="overflow-y-auto h-64 space-y-2 bg-gray-50 p-2 rounded flex-1">
        <div v-for="(msg, index) in mensagens" :key="index" class="message">
          <img v-if="msg.avatar" :src="msg.avatar" style="width:24px;height:24px;border-radius:50%;margin-right:4px;" />
          <strong>{{ msg.sender }}:</strong> {{ msg.text }}
        </div>
      </div>
      <input v-model="novaMensagem" class="w-full border rounded px-2 py-1 mt-2" placeholder="Digite sua mensagem" />
      <input v-model="agendarPara" type="datetime-local" class="w-full border rounded px-2 py-1 mt-2" /> @keyup.enter="enviarMensagem" placeholder="Digite sua mensagem..." />
      <button @click="enviarMensagem" class="bg-blue-600 text-white px-4 py-1 rounded mt-2"Enviar</button>
    </div>
  </div>

  <div class="w-1/3 bg-gray-100 p-2 border-l border-gray-300">
    <h3 class="font-semibold mb-2">Participantes</h3>
    <ul class="space-y-1">
      <li v-for="part in participantes" :key="part.uid" class="text-sm flex items-center space-x-2">
        <img v-if="part.avatar" :src="part.avatar" class="w-6 h-6 rounded-full" />
        <span>{{ part.nome || part.uid }}</span>
      </li>
    </ul>
  </div>
</div></template>

<script>
import { getDatabase, ref, push, onChildAdded, get } from 'firebase/database'
import { getAuth } from 'firebase/auth'

import { onValue, set, update } from 'firebase/database'
export default {
  props: ['pinoId'],
  data() {
    return {
      novaMensagem: '',
      agendarPara: '',
      mensagens: [],
      senhaDigitada: '',
      senhaNecessaria: false,
      senhaCorreta: false,
      entrouNoGrupo: false,
      participantes: []
    }
    return {
      novaMensagem: '',
      mensagens: [],
      senhaDigitada: '',
      senhaNecessaria: false,
      senhaCorreta: false,
      entrouNoGrupo: false,
      participantes: []
    }
    return {
      novaMensagem: '',
      mensagens: [],
      senhaDigitada: '',
      senhaNecessaria: false,
      senhaCorreta: false
    }
  },
  async mounted() {
    const db = getDatabase()
    const pinoSnap = await get(ref(db, 'pinos/' + this.pinoId))
    const pino = pinoSnap.val()
    if (pino?.senha) {
      this.senhaNecessaria = true
    } else {
      this.senhaCorreta = true
      this.verificarEntrada()
    }
  },
  methods: {
    verificarEntrada() {
      const db = getDatabase()
      const auth = getAuth()
      const uid = auth.currentUser?.uid
      const refEnt = ref(db, 'entradas/' + this.pinoId + '/' + uid)
      onValue(refEnt, snap => {
        if (snap.exists()) {
          this.entrouNoGrupo = true
          this.iniciarChat()
        } else {
          this.entrouNoGrupo = false
        }
      })

      const refPart = ref(db, 'entradas/' + this.pinoId)
      onValue(refPart, snap => {
        this.participantes = snap.val() ? Object.values(snap.val()) : []
      })
    },
    toggleEntrada() {
      const db = getDatabase()
      const auth = getAuth()
      const uid = auth.currentUser?.uid
      const refEnt = ref(db, 'entradas/' + this.pinoId + '/' + uid)
      if (this.entrouNoGrupo) {
        set(refEnt, null)
        this.entrouNoGrupo = false
      } else {
        const user = {
          uid: uid,
          nome: auth.currentUser?.email || 'Anônimo'
        }
        set(refEnt, user)
        this.entrouNoGrupo = true
      }
    },
    validarSenha() {
      const db = getDatabase()
      get(ref(db, 'pinos/' + this.pinoId)).then(snap => {
        const pino = snap.val()
        if (this.senhaDigitada === pino.senha) {
          this.senhaCorreta = true
          this.verificarEntrada()
        } else {
          alert("Senha incorreta.")
        }
      })
    },
    iniciarChat() {
      const db = getDatabase()
      const mensagensRef = ref(db, 'mensagens/' + this.pinoId)
      onChildAdded(mensagensRef, snapshot => {
        this.mensagens.push(snapshot.val())
      })
    },
    enviarMensagem() {
      if (!this.novaMensagem.trim()) return

      const db = getDatabase()
      const auth = getAuth()
      const mensagem = {
        sender: auth.currentUser?.email || 'Anônimo',
        text: this.novaMensagem,
        timestamp: Date.now()
      }

      const userRef = ref(db, 'usuarios/' + auth.currentUser?.uid)
      get(userRef).then(snap => {
        mensagem.avatar = snap.val()?.avatar || null
        mensagem.sender = snap.val()?.nome || mensagem.sender
        if (this.agendarPara) {
          mensagem.agendadoPara = this.agendarPara
          mensagem.enviado = false
          push(ref(db, 'mensagens_agendadas/' + this.pinoId), mensagem)
        } else {
          push(ref(db, 'mensagens/' + this.pinoId), mensagem)
        }
        this.novaMensagem = ''
      })
    }
  }
}
</script>
