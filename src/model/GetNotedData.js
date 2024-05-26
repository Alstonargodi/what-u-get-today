import { getDatabase,ref,onValue } from "firebase/database";
import { app } from "./FirebaseConfig";

const database = getDatabase()
const readDb = ref(database,"Match/")

export const readFirebase = onValue(readDb,(snapshot)=>{
    const data = snapshot.val()
    console.log(data)
})



