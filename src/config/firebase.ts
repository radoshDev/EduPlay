// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDR47OKHCV2SCtioM09ml1Az1dPwWTi0IQ",
	authDomain: "eduplay-6b78a.firebaseapp.com",
	projectId: "eduplay-6b78a",
	storageBucket: "eduplay-6b78a.appspot.com",
	messagingSenderId: "798273311895",
	appId: "1:798273311895:web:8dc2e00e61960b755c05d2",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
