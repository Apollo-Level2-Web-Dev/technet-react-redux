import { initializeApp } from 'firebas/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDiXjaqDcUBVWR440_aZk5DbLpgXsRSsqQ',
  authDomain: 'simple-ema-john-8bc50.firebaseapp.com',
  projectId: 'simple-ema-john-8bc50',
  storageBucket: 'simple-ema-john-8bc50.appspot.com',
  messagingSenderId: '1080330401067',
  appId: '1:1080330401067:web:bc3f1b9675b3d45cf0816e',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
