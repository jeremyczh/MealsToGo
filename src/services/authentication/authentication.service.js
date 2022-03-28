import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginRequest = (app, email, password) => {
  signInWithEmailAndPassword(getAuth(app), email, password);
};
