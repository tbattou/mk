const items = [
    {
    id:1,
    title: "Remera Subzero",
    img: "",
    desc: "primer articulo",
    categoria: "Remera",
    price: "1000",
    stock: "4",
    },

    {
    id:2,
    title: "Remera Scorpion",
    img: "",
    desc: "seundo articulo",
    categoria: "Remera",
    price: "1500",
    stock: "6",
    },

    {
    id:3,
    title: "Buzo Subzero",
    img: "",
    desc: "tercer articulo",
    categoria: "Buzo",
    price: "3000",
    stock: "2",
    },
]

export const getItem = new Promise((resolve) => {
    setTimeout(() => {
        resolve(items);
    }, 2000);
    });
    