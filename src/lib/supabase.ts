import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkB9gKiTZQ6AKlvJCAe2EhtEgAqUd2mdU",
  authDomain: "portfolio-12c61.firebaseapp.com",
  projectId: "portfolio-12c61",
  storageBucket: "portfolio-12c61.firebasestorage.app",
  messagingSenderId: "632461044199",
  appId: "1:632461044199:web:f58c1b2264aa30f19df542",
  measurementId: "G-WB5X8FXC8F"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
