var admin = require("firebase-admin");

var serviceAccount = require("@/Admin/myproject-bb84e-firebase-adminsdk-3tzwl-66eedc1ccf.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://myproject-bb84e.firebaseio.com"
});

const admin = admin.firestore();
