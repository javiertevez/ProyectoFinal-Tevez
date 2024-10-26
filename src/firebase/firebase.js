// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-react-93700.firebaseapp.com",
  projectId: "ecommerce-react-93700",
  storageBucket: "ecommerce-react-93700.appspot.com",
  messagingSenderId: "487434933994",
  appId: "1:487434933994:web:6824a0438c9a21c35aa993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get de products
export async function getProducts() {

  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.size !== 0) {

      const productsList = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      return productsList;

    } else {
      console.log('Colección vacía');

    }
  }
  catch (error) {
    console.error('Error al obtener el documento', error);
  }
}

// funcion para enviar una nueva orden de pedido

export async function sendOrder(order){
  const ordersCollection = collection (db, 'orders');
  try {
   const docRef = await addDoc(ordersCollection, order);
   console.log ('Nueva orden generada: '+ docRef.id);
   return docRef.id;
  } catch (error) {
    console.log('Error al agregar el documento: '+ error)
    alert('La orden esta vacía')
  }
}
