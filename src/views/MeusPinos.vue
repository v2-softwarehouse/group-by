<template>
  <div>
    <h2>Todos os Pinos</h2>
    <ul>
      <li v-for="(pino, key) in pinos" :key="key">
        <strong>{{ pino.nome }}</strong> - {{ pino.descricao }}
        <span v-if="pino.createdBy === user?.uid">(meu)</span>
        <button v-if="pino.createdBy === user?.uid" @click="removerPino(key)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, onValue, remove } from 'firebase/database'

export default {
  data() {
    return {
      user: null,
      pinos: {}
    }
  },
  mounted() {
    const auth = getAuth()
    this.user = auth.currentUser
    const db = getDatabase()
    const pinosRef = ref(db, 'pinos')
    onValue(pinosRef, snapshot => {
      this.pinos = snapshot.val() || {}
    })
  },
  methods: {
    removerPino(pinoId) {
      const db = getDatabase()
      remove(ref(db, 'pinos/' + pinoId))
    }
  }
}
</script>
