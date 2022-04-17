import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0imBpGJghyVu4bZc-ltKIKWMj23hyqw4",
  authDomain: "financiacio-9d0f0.firebaseapp.com",
  projectId: "financiacio-9d0f0",
  storageBucket: "financiacio-9d0f0.appspot.com",
  messagingSenderId: "840213709351",
  appId: "1:840213709351:web:e8c6150ffb88d9a3144402",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, app };
