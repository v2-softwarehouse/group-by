<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white w-full max-w-md h-[80vh] rounded shadow-lg flex flex-col">
      <div class="p-4 border-b font-bold flex justify-between items-center">
        <span>💬 Chat - {{ grupo?.nome }}</span>
        <button @click="$emit('fechar')" class="text-red-600">Fechar</button>
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        <div v-for="msg in mensagens" :key="msg.id" class="p-2 rounded bg-gray-100">
          <strong>{{ msg.autor }}:</strong> {{ msg.texto }}
        </div>
      </div>
      <div class="p-4 border-t flex gap-2">
        <input v-model="novaMensagem" @keyup.enter="enviarMensagem"
               class="flex-1 border rounded px-2 py-1" placeholder="Digite sua mensagem..." />
        <button @click="enviarMensagem" class="bg-blue-500 text-white px-3 py-1 rounded">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, push, onChildAdded, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/init";

export default {
  props: {
    grupo: Object
  },
  data() {
    return {
      mensagens: [],
      novaMensagem: ""
    };
  },
  mounted() {
    const db = getDatabase(app);
    const chatRef = dbRef(db, `chats/${this.grupo.id}`);
    onChildAdded(chatRef, (snapshot) => {
      const msg = snapshot.val();
      this.mensagens.push({ id: snapshot.key, ...msg });
    });
  },
  methods: {
    enviarMensagem() {
      if (!this.novaMensagem.trim()) return;
      const db = getDatabase(app);
      const auth = getAuth(app);
      const user = auth.currentUser;
      const chatRef = dbRef(db, `chats/${this.grupo.id}`);

      push(chatRef, {
        autor: user?.email || "Anônimo",
        texto: this.novaMensagem,
        timestamp: Date.now()
      });

      this.novaMensagem = "";
    }
  }
};
</script>
