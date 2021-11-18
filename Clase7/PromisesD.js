const product = [
    {
        id: 30,
        titulo: "Celular Samsung Galaxy S21",
        descripcion: celular,
        precio: 121000,
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzvlaro-368338842",
    }
]

const producto = (timeout,data)=>{
    return new Promise((resolve,reject)=>{
        if(product.lenght>0){
            setTimeout(()=>{
                resolve(data)
            },timeout);
        }else{
            reject("No hay nada en el array")
        }
    });
}

producto(0,product)
.then(()=> producto(2000,
    products.map(product => console.log(product.name))
    ))
.catch((err)=> console.log(errr))
    .finally(()=>console.log("Finalizado"));


export default PromisesD;