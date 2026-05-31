import { log } from 'node:console';
import fs from 'node:fs';

fs.readFile("harshal.txt", "utf8", (err,data) => {
    if (err) {
        console.log("ERROR 404");
    } else {
        console.log(data);
    }
});