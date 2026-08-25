// 1. Create a Firebase project.
// 2. Enable Firestore Database.
// 3. Add a Web App in Firebase Project Settings.
// 4. Copy the Firebase config into the object below.
//
// IMPORTANT: Firebase Web API keys are not passwords. Security is enforced by
// Firestore Security Rules. Never put admin/service-account credentials here.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTfau4pEv_PnYwVbGnHYpJpDuaFyBr1zc",
  authDomain: "portfilio-e87b9.firebaseapp.com",
  projectId: "portfilio-e87b9",
  storageBucket: "portfilio-e87b9.firebasestorage.app",
  messagingSenderId: "857200189745",
  appId: "1:857200189745:web:e2a27cd27a20da00321010"
};

const firebaseReady = !Object.values(firebaseConfig).some(value =>
  String(value).includes("PASTE_YOUR")
);

let db = null;

if (firebaseReady) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db, firebaseReady };
