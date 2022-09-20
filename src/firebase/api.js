import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./config";
  
  const collectionName = "ordenes";
  const productos = "productos";
  

// Ordenes
  export const saveWebsite = (newLink) =>
    addDoc(collection(db, collectionName), newLink);
  
  export const updateWebsite = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetLinks = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  };
  
  export const getWebsites = () => getDocs(collection(db, collectionName));
  
  export const deleteWebsite = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getWebsite = (id) => getDoc(doc(db, collectionName, id));



  // productos
  export const saveProducto = (newItem) =>
    addDoc(collection(db, productos), newItem);
  
  export const updateProducto = (id, updatedFields) =>
    updateDoc(doc(db, productos, id), updatedFields);
  
  export const onGetItem = (callback) => {
    const unsub = onSnapshot(collection(db, productos), callback);
    return unsub;
  };
  
  export const getProductos = () => getDocs(collection(db, productos));
  
  export const deleteProducto = (id) => deleteDoc(doc(db, productos, id));
  
  export const getProducto = (id) => getDoc(doc(db, productos, id));