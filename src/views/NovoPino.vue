<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">📍 Criar Novo Pino</h2>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Nome do Grupo</label>
      <input v-model="nome" type="text" class="mt-1 block w-full border border-gray-300 rounded p-2" />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Localização</label>
      <input id="autocomplete" ref="autocompleteInput" type="text"
             placeholder="Digite um endereço"
             class="mt-1 block w-full border border-gray-300 rounded p-2" />
    </div>

    <div v-if="lat && lng" class="mb-4 text-sm text-gray-700">
      <p><strong>Latitude:</strong> {{ lat }}</p>
      <p><strong>Longitude:</strong> {{ lng }}</p>
    </div>

    <button @click="criarPino"
            class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold">
      ➕ Criar Pino
    </button>
  </div>
</template>

<script>
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase/init";

export default {
  name: "NovoPino",
  data() {
    return {
      nome: "",
      endereco: "",
      lat: null,
      lng: null,
      categoria: "",
    return {
      nome: "",
      lat: null,
      lng: null,
      autocomplete: null
    };
  },
  mounted() {
    if (window.google && window.google.maps) {
      this.initAutocomplete();
    } else {
      const loader = document.createElement('script');
      loader.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAS7rybtVWyXlHozNOdXP-6AcrwM2LvbzY&libraries=places`;
      loader.async = true;
      loader.onload = () => this.initAutocomplete();
      document.head.appendChild(loader);
    }
  },
  methods: {
    initAutocomplete() {
      const input = this.$refs.autocompleteInput;
      this.autocomplete = new google.maps.places.Autocomplete(input);
      this.autocomplete.addListener("place_changed", () => {
        const place = this.autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        }
      });
    },
    criarPino() {
      if (!this.nome || !this.lat || !this.lng) {
        alert("Preencha o nome do grupo e selecione uma localização.");
        return;
      }

      const db = getDatabase(app);
      const pinosRef = ref(db, "pinos");
      const novoPino = {
        nome: this.nome,
        lat: this.lat,
        lng: this.lng,
        criadoEm: new Date().toISOString()
      };

      push(pinosRef, novoPino)
        .then(() => {
          alert("✅ Pino criado com sucesso!");
          this.$router.push("/");
        })
        .catch(error => {
          console.error("Erro ao salvar pino:", error);
          alert("❌ Erro ao salvar pino. Veja o console.");
        });
    }
  }
}
</script>

<style scoped>
</style>
