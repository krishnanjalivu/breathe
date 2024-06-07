import { initializeApp } from 'firebase/app';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: "tactile-wave-412007.firebaseapp.com",
    projectId: "tactile-wave-412007",
    storageBucket: "tactile-wave-412007.appspot.com",
    messagingSenderId: "1091181993143",
    appId: "1:1091181993143:web:eec0da99a60f2f7bcb0132",
    measurementId: "G-S8D14EZF5V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth,googleProvider, githubProvider };