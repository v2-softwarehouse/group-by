<template>
  <div class="relative h-screen">
    <div id="map" class="h-full w-full"></div>
    <ChatModal v-if="grupoSelecionado" :grupo="grupoSelecionado" @fechar="grupoSelecionado = null" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";
import { app } from "../firebase/init";
import ChatModal from "../components/ChatModal.vue";

export default {
  name: "Home",
  components: { ChatModal },
  setup() {
    const grupoSelecionado = ref(null);

    const carregarMapa = () => {
      const mapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 12,
      });

      const db = getDatabase(app);
      const pinosRef = dbRef(db, "pinos");

      onValue(pinosRef, (snapshot) => {
        const dados = snapshot.val();
        if (!dados) return;

        Object.entries(dados).forEach(([id, pino]) => {
          const marcador = new google.maps.Marker({
            position: { lat: pino.lat, lng: pino.lng },
            map: mapa,
            title: pino.nome,
          });

          marcador.addListener("click", () => {
            grupoSelecionado.value = { ...pino, id };
          });
        });
      });
    };

    onMounted(() => {
      if (!window.google || !window.google.maps) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAS7rybtVWyXlHozNOdXP-6AcrwM2LvbzY`;
        script.async = true;
        script.defer = true;
        script.onload = carregarMapa;
        document.head.appendChild(script);
      } else {
        carregarMapa();
      }
    });

    return { grupoSelecionado };
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
