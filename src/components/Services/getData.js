const data = [
    {
    id:1,
    title: "Remera Subzero",
    image: "",
    desc: "primer articulo",
    categoria: "Remera",
    price: "1000",
    stock: "4",
    },

    {
    id:2,
    title: "Remera Scorpion",
    image: "",
    desc: "segundo articulo",
    categoria: "Remera",
    price: "1500",
    stock: "6",
    },

    {
    id:3,
    title: "Buzo Subzero",
    image: "",
    desc: "tercer articulo",
    categoria: "Buzo",
    price: "3000",
    stock: "2",
    },
]

export const getData = new Promise((resolve) => {
setTimeout(() => {
    resolve(data);
}, 2000);
});
