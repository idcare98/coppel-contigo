// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD53-mtkPIfBvdFzH-Ork5cuWKv5Ym_g9Q",
  authDomain: "coppel-contigo.firebaseapp.com",
  databaseURL: "https://coppel-contigo-default-rtdb.firebaseio.com",
  projectId: "coppel-contigo",
  storageBucket: "coppel-contigo.appspot.com",
  messagingSenderId: "937641313576",
  appId: "1:937641313576:web:c3b1f26a3a58c5b4ddfc1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


//---------------           ARTICULOS           ---------------//

export const saveTask = ( sku, articulo, marca, modelo, departamento, clase, familia, cantidad, stock, fechaAlta, fechaBaja ) =>
  addDoc(collection(db, "Articulo"),{ 
    sku, articulo, marca, modelo, departamento, clase, familia, cantidad, stock, fechaAlta,fechaBaja 
});

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "Articulo"), callback);

export const deleteTask = (id) => 
  deleteDoc(doc(db, "Articulo", id));

export const getTask = (id) => 
  getDoc(doc(db, "Articulo", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "Articulo", id), newFields);

export const getTasks = () => 
  getDocs(collection(db, "Articulo"));

