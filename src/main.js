import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAliFiLVZ-5hXtG2beHybcGeHzhkkQ01_8",
  authDomain: "authemejer.firebaseapp.com",
  databaseURL: "https://authemejer-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authemejer",
  storageBucket: "authemejer.appspot.com",
  messagingSenderId: "139829906148",
  appId: "1:139829906148:web:5621d6e94f788280003af1"
};
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
