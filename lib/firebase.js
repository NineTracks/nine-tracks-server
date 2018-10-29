var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccount.json");

var databaseUrl = process.env.DATABASE_URL;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseUrl
});

module.exports = admin;