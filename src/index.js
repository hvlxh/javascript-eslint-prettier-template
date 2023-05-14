import { readdir } from "fs/promises";

const files = await readdir("./");
console.info(files);