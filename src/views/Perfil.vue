<template>
  <div>
    <h2>Meu Perfil</h2>
    <input v-model="nome" placeholder="Nome de exibição" />
    <input v-model="avatarUrl" placeholder="URL da imagem de perfil" />
    <button @click="salvar">Salvar</button>
    <div v-if="avatarUrl">
      <img :src="avatarUrl" alt="avatar" style="width:100px;height:100px;border-radius:50%;" />
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

export default {
  data() {
    return {
      nome: '',
      avatarUrl: ''
    }
  },
  mounted() {
    const auth = getAuth()
    const db = getDatabase()
    const uid = auth.currentUser?.uid
    if (!uid) return
    const userRef = ref(db, 'usuarios/' + uid)
    fetch(userRef.toString()).then(res => res.json()).then(data => {
      if (data) {
        this.nome = data.nome || ''
        this.avatarUrl = data.avatar || ''
      }
    })
  },
  methods: {
    salvar() {
      const auth = getAuth()
      const uid = auth.currentUser?.uid
      const db = getDatabase()
      set(ref(db, 'usuarios/' + uid), {
        nome: this.nome,
        avatar: this.avatarUrl
      })
      alert("Perfil salvo.")
    }
  }
}
</script>
