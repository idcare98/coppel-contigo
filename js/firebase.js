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
  setDoc
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

// TABLAS:
const DEPARTAMENTO = collection(db, 'Departamento');
const CLASE = collection(db, 'Clase');
const FAMILIA = collection(db, 'Familia');


//---------------           DEPARTAMENTO           ---------------//


export const saveDepto = (no, departamento) => 
  setDoc(doc(DEPARTAMENTO, no ), 
    {departamento} ); //guardar Documentos id
 
export const verDepto = () => 
  getDocs(DEPARTAMENTO);

export const reRenderDepto = (callback) => 
  onSnapshot(DEPARTAMENTO, callback); //renderizar en tiempo real

export const eliminarDepto = (idDoc) => 
  deleteDoc(doc(DEPARTAMENTO, idDoc)); //eliminar por id

export const verDeptoDoc = () => 
  getDoc(doc(DEPARTAMENTO)); //



//---------------           CLASE           ---------------//


export const saveClase = (no, clase) => 
setDoc(doc(CLASE, no ), 
  {clase} ); //guardar Documentos id

export const verClase = () => 
getDocs(CLASE);

export const reRenderClase = (callback) => 
onSnapshot(CLASE, callback); //renderizar en tiempo real

export const eliminarClase = (idDoc) => 
deleteDoc(doc(CLASE, idDoc)); //eliminar por id

export const verClaseDoc = () => 
getDoc(doc(CLASE)); //



//---------------          FAMILIA          ---------------//


export const saveFam = (no, familia) => 
setDoc(doc(FAMILIA, no ), 
  {familia} ); //guardar Documentos id

export const verFamilia = () => 
getDocs(FAMILIA);

export const reRenderFamilia = (callback) => 
onSnapshot(FAMILIA, callback); //renderizar en tiempo real

export const eliminarFamilia = (idDoc) => 
deleteDoc(doc(FAMILIA, idDoc)); //eliminar por id

export const verFamiliaDoc = () => 
getDoc(doc(FAMILIA)); //