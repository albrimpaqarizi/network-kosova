import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCgDePIVPbDZTg13B3gUe6eYUz7PZxkPI',
  authDomain: 'network-kosova.firebaseapp.com',
  projectId: 'network-kosova',
  storageBucket: 'network-kosova.appspot.com',
  messagingSenderId: '231556270244',
  appId: '1:231556270244:web:800a42115aa51427d9fe31',
  measurementId: 'G-FQBVS61FHV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
