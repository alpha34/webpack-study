import getRandomAddress from "../src/randomAddress";
import { nanoid } from "nanoid";
import "./styles/main.scss";
import mainImage from "./assets/image.png";

console.log(nanoid());
console.log(nanoid());
console.log(getRandomAddress());

const img = document.getElementById("mainImage");

img.src = mainImage;
