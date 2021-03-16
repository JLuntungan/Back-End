import {
    fullname as namaLengkap, 
    person as orang, 
    display as tampil
} from "./person.js";

//import  color from "./TextInput/TextInput.js"
import TextInput ,{color} from "./TextInput/TextInput.js";

console.log(namaLengkap, orang);
tampil(orang);

TextInput();

console.log(color);