<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Header -->
    <div class="bg-white px-4 py-3 shadow-md flex items-center justify-between">
      <h2 class="text-lg font-semibold">Chat do Pino</h2>
      <span class="text-sm text-gray-500">{{ participantes.length }} online</span>
    </div>

    <!-- Lista de mensagens -->
    <div ref="chatBox" class="flex-1 overflow-y-auto px-4 py-2 space-y-2">
      <div
        v-for="msg in mensagens"
        :key="msg.id"
        class="flex"
        :class="{'justify-end': msg.de === usuarioAtual.uid, 'justify-start': msg.de !== usuarioAtual.uid}"
      >
        <div
          class="max-w-xs px-3 py-2 rounded-lg shadow text-sm"
          :class="{
            'bg-blue-600 text-white': msg.de === usuarioAtual.uid,
            'bg-white text-gray-800': msg.de !== usuarioAtual.uid
          }"
        >
          <p class="font-semibold mb-0.5">{{ msg.nome }}</p>
          <p>{{ msg.texto }}</p>
          <p class="text-[10px] mt-1 text-right">{{ formatarHora(msg.timestamp) }}</p>
        </div>
      </div>
    </div>

    <!-- Campo de nova mensagem -->
    <div class="bg-white px-4 py-2 flex items-center gap-2 border-t">
      <input
        v-model="novaMensagem"
        @keyup.enter="enviarMensagem"
        type="text"
        placeholder="Digite sua mensagem..."
        class="flex-1 border rounded px-3 py-1.5 text-sm"
      />
      <button @click="enviarMensagem" class="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, push, onChildAdded } from 'firebase/database'
import { getAuth } from 'firebase/auth'

export default {
  data() {
    return {
      novaMensagem: '',
      mensagens: [],
      participantes: [],
      usuarioAtual: {
        uid: '',
        nome: 'Você'
      }
    }
  },
  mounted() {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      this.usuarioAtual.uid = user.uid
      this.usuarioAtual.nome = user.displayName || 'Você'
    }

    const db = getDatabase()
    const mensagensRef = ref(db, 'mensagens/global')

    onChildAdded(mensagensRef, snapshot => {
      const msg = snapshot.val()
      this.mensagens.push(msg)
      this.scrollToBottom()
    })
  },
  methods: {
    enviarMensagem() {
      if (!this.novaMensagem.trim()) return

      const db = getDatabase()
      const mensagensRef = ref(db, 'mensagens/global')

      const novaMsg = {
        texto: this.novaMensagem,
        timestamp: Date.now(),
        de: this.usuarioAtual.uid,
        nome: this.usuarioAtual.nome
      }

      push(mensagensRef, novaMsg)
      this.novaMensagem = ''
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.chatBox
        if (el) el.scrollTop = el.scrollHeight
      })
    },
    formatarHora(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  }
}
</script>
