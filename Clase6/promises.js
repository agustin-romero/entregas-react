const products = [
    {
        id: 30,
        name: "Agua Con Gas 1.5 lts",
        stock: 86,
        cost: 45,
    },
    {
        id: 29,
        name: "Agua Sin Gas 1.5 lts",
        stock: 100,
        cost: 140,
    },
    {
        id: 76,
        name: "Alambrado Chardonnay 750 ml",
        stock: 92,
        cost: 575,
    }
]

const productos = (timeout,data)=>{
    return new Promise((resolve,reject)=>{
        if(products.lenght>0){
            setTimeout(()=>{
                resolve(data)
            },timeout);
        }else{
            reject("Error no hay nada en el array")
        }
    });
}

productos(0,products)
.then(()=> productos(2000,
    products.map(product => console.log(product.name))
    ))
.catch((err)=> console.log(errr))
    .finally(()=>console.log("Finalizado"));