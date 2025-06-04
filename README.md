
# 📍 GroupBy – Chat por Mapa em Tempo Real

GroupBy é uma rede de comunicação que conecta pessoas por meio de pinos (grupos) geolocalizados em um mapa, com funcionalidades de chat, filtros e notificações.

---

## 🚀 Funcionalidades

- 🗺️ Mapa com marcadores por categoria (`evento`, `aviso`, `denúncia`)
- 🧭 Filtros por distância, categoria e popularidade
- 🗂️ Lista lateral fixa com todos os pinos disponíveis
- ➕ Criação de pinos com endereço via Google Places + categoria
- 💬 Chat em tempo real por grupo (Firebase Realtime Database)
- 🔔 Notificações sonoras e visuais com Firebase Cloud Messaging (FCM)
- 🕘 Agendamento de mensagens futuras
- 📲 Instalação como PWA com splash screen

---

## 🛠️ Instalação Local

### 1. Clone ou extraia o projeto
```bash
cd groupby-vue-pwa-avancado
```

### 2. Instale as dependências do Vue
```bash
npm install
```

### 3. Instale as dependências das funções Firebase
```bash
cd functions
npm install
cd ..
```

### 4. Faça login no Firebase CLI
```bash
firebase login
```

### 5. Selecione o projeto
```bash
firebase use --add group-by-319f5
# Selecione: group-by-319f5
```

---

## ⚙️ Build e Deploy

### Build do frontend Vue
```bash
npm run build
```

### Deploy para Firebase Hosting + Functions
```bash
firebase deploy --only hosting,functions
```

---

## 🔐 Requisitos

- Firebase CLI (`npm install -g firebase-tools`)
- Projeto configurado no [Firebase Console](https://console.firebase.google.com/)
- APIs habilitadas:
  - Firebase Realtime Database
  - Firebase Authentication
  - Firebase Cloud Functions
  - Firebase Cloud Messaging
  - Google Maps + Places API

---

## 🧠 Observações

- O token FCM é salvo automaticamente por usuário autenticado
- Notificações requerem permissão explícita do navegador
- As mensagens agendadas são executadas via Cloud Functions + Scheduler

---

## 👩‍💻 Desenvolvido com

- [Vue.js 2 + Vue CLI](https://cli.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- Google Maps, Places API




npm install
npm run build

cd functions
npm install
cd ..

firebase deploy --only hosting,functions
