import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyFNj96cPo399RjibMIe10E216GbEepoM',
  authDomain: 'react-tescik.firebaseapp.com',
  databaseURL:
    'https://react-tescik-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-tescik',
  storageBucket: 'react-tescik.appspot.com',
  messagingSenderId: '677970941018',
  appId: '1:677970941018:web:29ca27329492a6dd9eb463',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
