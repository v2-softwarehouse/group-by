<template>
  <div class="p-4">
    <h2 class="text-lg font-bold mb-4">Painel de Pinos</h2>
    <table class="min-w-full border text-sm">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-2 text-left">Nome</th>
          <th class="p-2 text-left">Criador</th>
          <th class="p-2 text-left">Categoria</th>
          <th class="p-2 text-left">Participantes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pino, key) in pinos" :key="key" class="border-t">
          <td class="p-2">{{ pino.nome }}</td>
          <td class="p-2">{{ pino.createdBy }}</td>
          <td class="p-2">{{ pino.categoria || '-' }}</td>
          <td class="p-2">{{ pino.participantes ? Object.keys(pino.participantes).length : 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from 'firebase/database'

export default {
  data() {
    return { pinos: {} }
  },
  mounted() {
    const db = getDatabase()
    onValue(ref(db, 'pinos'), snap => {
      this.pinos = snap.val() || {}
    })
  }
}
</script>
