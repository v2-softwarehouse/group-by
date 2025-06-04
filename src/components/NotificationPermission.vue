<template>
  <div v-if="!permGranted" class="fixed bottom-4 left-4 bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-xl shadow-md max-w-sm z-50">
    <p class="mb-2 font-semibold">🔔 Deseja receber notificações?</p>
    <button @click="pedirPermissao"
            class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded">
      Ativar notificações
    </button>
  </div>
</template>

<script>
export default {
  name: "NotificationPermission",
  data() {
    return {
      permGranted: Notification.permission === "granted"
    };
  },
  methods: {
    pedirPermissao() {
      Notification.requestPermission().then(permission => {
        this.permGranted = (permission === "granted");
        if (permission !== "granted") {
          alert("Você pode ativar notificações nas configurações do navegador.");
        }
      });
    }
  }
}
</script>
