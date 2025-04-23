import { productos } from "./productos";

export const fetchData = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 3000);
});
