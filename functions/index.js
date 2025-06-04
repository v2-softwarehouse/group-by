
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendMessageNotification = functions.database
  .ref("/messages/{pinId}/{messageId}")
  .onCreate(async (snapshot, context) => {
    const message = snapshot.val();
    const pinId = context.params.pinId;

    const tokensSnap = await admin.database().ref(`/pins/${pinId}/tokens`).once("value");
    const tokens = Object.values(tokensSnap.val() || {});

    if (!tokens.length) {
      console.log("Nenhum token para este pino.");
      return null;
    }

    const payload = {
      notification: {
        title: `📢 Nova mensagem em ${message.groupName || "um grupo"}`,
        body: message.text || "Mensagem recebida",
        icon: "/logo192.png",
        click_action: "https://group-by-319f5.web.app/"
      }
    };

    return admin.messaging().sendToDevice(tokens, payload);
  });
