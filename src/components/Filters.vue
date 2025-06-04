<template>
  <div class="p-4 bg-white shadow-md rounded w-full max-w-xs">
    <h3 class="font-bold text-lg mb-2">Filtros</h3>

    <label class="block text-sm font-semibold mt-2">Categoria</label>
    <select v-model="categoria" class="w-full border border-gray-300 p-2 rounded">
      <option value="">Todas</option>
      <option value="evento">Evento</option>
      <option value="aviso">Aviso</option>
      <option value="denuncia">Denúncia</option>
    </select>

    <label class="block text-sm font-semibold mt-4">Distância (km)</label>
    <input v-model.number="distancia" type="number" class="w-full border border-gray-300 p-2 rounded" min="0" />

    <label class="inline-flex items-center mt-4">
      <input type="checkbox" v-model="popular" class="form-checkbox" />
      <span class="ml-2">Somente populares (mais de 10 membros)</span>
    </label>

    <button @click="aplicar" class="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded">Aplicar</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      categoria: "",
      distancia: 0,
      popular: false
    };
  },
  methods: {
    aplicar() {
      this.$emit("filtros-aplicados", {
        categoria: this.categoria,
        distancia: this.distancia,
        popular: this.popular
      });
    }
  }
}
</script>
