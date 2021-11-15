//Misma premisa que itemListConteiner
import getFetch  from "../itemList"
import ItemDetail from "./itemDetail"
import React from 'react'
import { useParams } from "react-router"
import { useState,useEffect } from "react"

export default function ItemDetailContainer() {

    const {id} = useParams()
    const [detalleItem, setDetalleItem] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if(id){
            getFetch.then(resolve => {
                console.log('Llamado a API por itemdetail')
                setDetalleItem(resolve.find(item => item.id === id))
            })
            .catch((err)=>{console.log('Error: ' + err)})
            .finally(() => {setLoading(false)}) 

        }
    }, [id])
    
    return (
        <div>
             {loading ? <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span> 
                        </div>:
                        <ItemDetail title={detalleItem.title} img={detalleItem.img} price={detalleItem.price}
                        subcategoria={detalleItem.subcategoria} categoria={detalleItem.categoria}/>
             }
        </div>
    )
}


