import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6HWJVWGE-uIUkbhUWlOJ4C7dfuILwlRA",
  authDomain: "proyecto-final-react-palomero.firebaseapp.com",
  projectId: "proyecto-final-react-palomero",
  storageBucket: "proyecto-final-react-palomero.appspot.com",
  messagingSenderId: "525160130264",
  appId: "1:525160130264:web:9f20fd5c1a8b0f9624d9ad",
  measurementId: "G-S111MVEEPK"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
   <App /> 
); 
