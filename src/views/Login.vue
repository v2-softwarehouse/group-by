<template>
  <div class='h-screen flex items-center justify-center bg-gray-100'>
    <div class='bg-white p-6 rounded shadow-md w-full max-w-sm'>
      <h2 class='text-xl font-bold mb-4 text-center'>🔐 Entrar no GroupBy</h2>
      <input v-model='email' type='email' placeholder='Email'
             class='mb-3 w-full border border-gray-300 rounded px-3 py-2' />
      <input v-model='senha' type='password' placeholder='Senha'
             class='mb-4 w-full border border-gray-300 rounded px-3 py-2' />
      <button @click='entrar'
              class='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded'>Entrar</button>
      <p class='text-center text-sm mt-4 text-gray-600'>
        Ainda não tem conta?
        <a href='#' @click.prevent='registrar' class='text-blue-600 underline'>Registrar</a>
      </p>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { app } from "../firebase/init";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    async entrar() {
      if (!this.email || !this.senha) {
        alert("Preencha email e senha");
        return;
      }

      const auth = getAuth(app);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.senha);
        console.log("Usuário autenticado:", userCredential.user.email);
        this.$router.push("/");
      } catch (err) {
        console.error(err);
        alert("Erro ao entrar: " + err.message);
      }
    },

    async registrar() {
      if (!this.email || !this.senha) {
        alert("Preencha email e senha");
        return;
      }

      const auth = getAuth(app);
      try {
        if (auth.currentUser?.isAnonymous) {
          await signOut(auth);
        }

        await createUserWithEmailAndPassword(auth, this.email, this.senha);
        this.$router.push("/");
      } catch (err) {
        alert("Erro ao registrar: " + err.message);
      }
    }
  }
}
</script>
