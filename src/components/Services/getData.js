const data = [
    {
    id:1,
    title: "Remera Subzero",
    image: "https://shopix.com.ar/enventa-remera-mortal-kombat-11-doble-estampa_SPA918904536",
    desc: "primer articulo",
    categoria: "Remera",
    price: "1000",
    stcok: "4",
    },

    {
    id:2,
    title: "Remera Scorpion",
    image: "https://shopix.com.ar/enventa-remeras-mortal-kombat-mk-gamer_SPA767391825",
    descripcion: "seundo articulo",
    categoria: "Remera",
    price: "1500",
    stcok: "6",
    },

    {
    id:3,
    title: "Buzo Subzero",
    image: "https://shopix.com.ar/enventa-remera-mortal-kombat-11-ps4-sub-zero-playstation_SPA1118138066",
    descripcion: "tercer articulo",
    categoria: "Buzo",
    price: "3000",
    stcok: "2",
    },
]

const getData = new Promise((resolve) => {
setTimeout(() => {
    resolve(data)
} , 2000)
})

export default getData;
