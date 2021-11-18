import { useEffect, useState } from 'react';
import './PromisesD';

const ItemDetail=()=>{
    const[detailProd,setDetailProd]=useState([])
    const[error,setError]=useState("")

    useEffect(()=>{
        PromisesD()
        .then(result=>setDetailProd(result))
        .catch(err=>setError(err))

    },[])
    console.log(detailProd[0])
    return(
        <>
            <p>{error}</p>
            <hr />
            <div key={detailProd[0].id}>
                <h2>{detailProd[0].titulo}</h2>
                <p>{detailProd[0].descripcion}</p>
                <p> {detailProd[0].precio}</p
                <img src={detailProd[0].imagen}/>
            </div>
        </>
    )
}

export default ItemDetail;