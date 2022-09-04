import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHVYzIQOlxs1XS52CpMnGATqDxkVLvrXY',
  authDomain: 'network-kosova-5b04c.firebaseapp.com',
  projectId: 'network-kosova-5b04c',
  storageBucket: 'network-kosova-5b04c.appspot.com',
  messagingSenderId: '317999238817',
  appId: '1:317999238817:web:a22dc1282f0588970baae0',
  measurementId: 'G-ZXN8401EF3',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { app, auth };
