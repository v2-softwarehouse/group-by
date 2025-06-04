<template>
  <div class="h-screen flex flex-col">
    <div class="p-4 bg-blue-600 text-white font-bold">💬 {{ groupName }}</div>
    <div class="flex-1 p-4 overflow-y-auto bg-gray-100" ref="messagesBox">
      <div v-for="(msg, index) in mensagens" :key="index"
           class="mb-2 p-2 rounded bg-white shadow w-fit max-w-xs"
           :class="{ 'ml-auto bg-blue-100': msg.usuario === usuario }">
        <div class="text-sm font-semibold">{{ msg.usuario }}</div>
        <div>{{ msg.texto }}</div>
        <div class="text-xs text-gray-500 text-right">{{ msg.hora }}</div>
      </div>
    </div>
    <div class="p-4 border-t bg-white flex gap-2">
      <input v-model="novaMensagem" @keyup.enter="enviar" type="text"
             class="flex-1 border border-gray-300 rounded px-3 py-2"
             placeholder="Digite uma mensagem..." />
      <button @click="enviar"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Enviar</button>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, push, onChildAdded, getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/init";

export default {
  name: "Chat",
  data() {
    return {
      mensagens: [],
      novaMensagem: "",
      groupName: decodeURIComponent(this.$route.params.nome),
      usuario: "Anônimo"
    };
  },
  mounted() {
    const db = getDatabase(app);
    const mensagensRef = dbRef(db, "mensagens/" + this.groupName);

    onChildAdded(mensagensRef, snapshot => {
      this.mensagens.push(snapshot.val());
      this.$nextTick(() => {
        this.$refs.messagesBox.scrollTop = this.$refs.messagesBox.scrollHeight;
      });
    });

    const auth = getAuth(app);
    onAuthStateChanged(auth, user => {
      if (user) this.usuario = user.email || "Usuário";
    });
  },
  methods: {
    enviar() {
      if (!this.novaMensagem.trim()) return;

      const db = getDatabase(app);
      const mensagensRef = dbRef(db, "mensagens/" + this.groupName);

      push(mensagensRef, {
        usuario: this.usuario,
        texto: this.novaMensagem.trim(),
        hora: new Date().toLocaleTimeString()
      });

      this.novaMensagem = "";
    }
  }
}
</script>
