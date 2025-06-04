<template>
  <header class="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
    <h1 class="font-bold">📍 GroupBy</h1>
    <button v-if="user" @click="logout" class="bg-white text-blue-600 px-3 py-1 rounded">Sair</button>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/init";

export default {
  name: "Header",
  data() {
    return {
      user: null
    };
  },
  created() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, user => {
      this.user = user;
    });
  },
  methods: {
    logout() {
      const auth = getAuth(app);
      signOut(auth).then(() => this.$router.push("/login"));
    }
  }
}
</script>
