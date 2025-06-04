import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { vapidKey } from "./vapidKey";
import { app } from "./init";

const messaging = getMessaging(app);

export async function solicitarPermissaoENotificar() {
  if (Notification.permission === "granted") {
    await solicitarToken();
  } else if (Notification.permission === "default") {
    const status = await Notification.requestPermission();
    if (status === "granted") {
      await solicitarToken();
    } else {
      console.warn("❌ Permissão de notificação negada pelo usuário.");
    }
  } else {
    console.warn("❌ Notificações foram bloqueadas pelo navegador.");
  }

  onMessage(messaging, payload => {
    console.log("🔔 Mensagem recebida:", payload);
    alert(payload.notification.title + ": " + payload.notification.body);
  });
}

async function solicitarToken() {
  try {
    const token = await getToken(messaging, { vapidKey });
    if (token) {
      console.log("🔔 Token gerado:", token);
    }
  } catch (err) {
    console.error("Erro ao gerar token:", err);
  }
}
