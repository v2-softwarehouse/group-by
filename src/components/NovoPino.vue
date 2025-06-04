<template>
  <div class="form-container">
    <h2>Novo Pino</h2>
    <input v-model="nome" placeholder="Nome do grupo" />
    <textarea v-model="descricao" placeholder="Descrição do grupo"></textarea>
    <input v-model="senha" placeholder="Senha do grupo (opcional)" />
    <input id="autocomplete" placeholder="Digite o local..." />
    <button @click="criarPino">Criar Pino</button>
  </div>
</template>

<script>
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database'
import { getAuth } from 'firebase/auth'

export default {
  data() {
    return {
      nome: '', descricao: '', lat: null, lng: null, senha: '' }
    return {
      nome: '',
      descricao: '',
      lat: null,
      lng: null
    }
  },
  mounted() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      { types: ["geocode"] }
    )
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()
      if (place.geometry) {
        this.lat = place.geometry.location.lat()
        this.lng = place.geometry.location.lng()
      }
    })
  },
  methods: {
    criarPino() {
      if (!this.nome || !this.descricao || this.lat === null || this.lng === null) {
        alert("Preencha todos os campos e escolha uma localização válida.")
        return
      }

      const db = getDatabase()
      const auth = getAuth()
      const pino = {
        senha: this.senha || null,
        nome: this.nome,
        descricao: this.descricao,
        lat: this.lat,
        lng: this.lng,
        createdBy: auth.currentUser?.uid || "anon",
        timestamp: serverTimestamp()
      }

      push(ref(db, 'pinos'), pino).then(() => {
        alert("Pino criado com sucesso!")
        this.nome = ''
        this.descricao = ''
        this.lat = null
        this.lng = null
        document.getElementById("autocomplete").value = ''
      })
    }
  }
}
</script>

<style>
.form-container {
  max-width: 400px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
input, textarea {
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>
