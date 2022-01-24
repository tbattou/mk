const data = [
    {
    id:1,
    title: "Remera Subzero",
    image: "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
    desc: "primer articulo",
    categoria: "Remera",
    price: "1000",
    stock: "4",
    },

    {
    id:2,
    title: "Remera Scorpion",
    image: "https://i.blogs.es/588c7d/amd6/original.jpeg",
    desc: "segundo articulo",
    categoria: "Remera",
    price: "1500",
    stock: "6",
    },

    {
    id:3,
    title: "Buzo Subzero",
    image: "https://http2.mlstatic.com/D_NQ_NP_884972-MLA40182457265_122019-O.jpg",
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
