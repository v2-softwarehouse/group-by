<template>
  <div class="h-full relative">
    <div class="flex h-full">
  <div class="w-72 p-2 z-10">
    <Filters @filtros-aplicados="aplicarFiltros" />
  </div>
  <div id="map" class="flex-1 h-full"></div>
</div>

    <button @click="abrirNovoPino"
            class="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-xl z-50">
      ➕ Novo Pino
    </button>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase/init";

import Filters from './Filters';

export default {
  name: "MapView",
  data() {
    return {
      filtros: {},
    return {
      map: null,
      markers: [],
      userLatLng: null
    };
  },
  mounted() {
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      const loader = document.createElement('script');
      loader.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAS7rybtVWyXlHozNOdXP-6AcrwM2LvbzY`;
      loader.async = true;
      loader.onload = () => this.initMap();
      document.head.appendChild(loader);
    }
  },
  methods: {
    aplicarFiltros(filtros) {
      this.filtros = filtros;
      this.carregarPinos();
    },
    abrirNovoPino() {
      this.$router.push('/novo-pino');
    },
    initMap() {
      navigator.geolocation.getCurrentPosition(pos => {
        this.userLatLng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
      });

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 10
      });
      this.carregarPinos();
    },
    carregarPinos() {
      const db = getDatabase(app);
      const pinosRef = ref(db, "pinos");

      onValue(pinosRef, snapshot => {
        const data = snapshot.val();
        this.markers.forEach(m => m.setMap(null));
        this.markers = [];

        if (data) {
          Object.entries(data).forEach(([id, pino]) => {
          if (this.filtros.categoria && pino.categoria !== this.filtros.categoria) return;
          if (this.filtros.popular && (!pino.membros || pino.membros < 10)) return;
          if (this.filtros.distancia && this.userLatLng) {
            const dist = this.calcularDistancia(this.userLatLng.lat, this.userLatLng.lng, pino.lat, pino.lng);
            if (dist > this.filtros.distancia) return;
          }
            const marker = new google.maps.Marker({
              position: { lat: pino.lat, lng: pino.lng },
              map: this.map,
              title: pino.nome
            });

            const infowindow = new google.maps.InfoWindow({
              content: `<strong>${pino.nome}</strong><br><small>${new Date(pino.criadoEm).toLocaleString()}</small>`
            });

            marker.addListener("click", () => {
              this.$router.push(`/chat/${encodeURIComponent(pino.nome)}`);
              infowindow.open(this.map, marker);
            });

            this.markers.push(marker);
          });
        }
      });
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
