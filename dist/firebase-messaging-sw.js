importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAS7rybtVWyXlHozNOdXP-6AcrwM2LvbzY",
  projectId: "group-by-319f5",
  messagingSenderId: "563584335869",
  appId: "1:563584335869:web:xxxxxxxxxxx"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png'
  });
});
