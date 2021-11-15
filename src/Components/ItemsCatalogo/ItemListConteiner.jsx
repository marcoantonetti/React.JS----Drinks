import React from 'react'
import Items from './items'
import { useState, useEffect } from 'react'
import getFetch from './itemList'
import { useParams } from 'react-router-dom'



export default function ItemListConteiner(props) {

    const [products, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {subcategoryID} = useParams()
    const {categoryID} = useParams()


    useEffect(() => {

       // Si esta definido, filtrar mi categoria
       if(subcategoryID){
        getFetch//then((resolve)=>{resolve.json()}) No pongo el json porque no es una API es solo una simulacion. Array productos ya es un obj JS no un obj JSON
        .then((resolve)=>{
            console.log('Llamada a API por categoria')
            setProductos(resolve.filter(item => item.subcategoria===subcategoryID))})
        .catch((err)=>{console.log('ERROR: ' + err)})
        .finally(() => {setLoading(false)}) 

       } else if (categoryID) {getFetch//then((resolve)=>{resolve.json()}) No pongo el json porque no es una API es solo una simulacion. Array productos ya es un obj JS no un obj JSON
       .then((resolve)=>{
           console.log('Llamada a API por categoria')
           setProductos(resolve.filter(item => item.categoria===categoryID))})
       .catch((err)=>{console.log('ERROR: ' + err)})
       .finally(() => {setLoading(false)}) 
}
        else {
            // Si es undefined que muestre todo
            getFetch//then((resolve)=>{resolve.json()}) No pongo el json porque no es una API es solo una simulacion. Array productos ya es un obj JS no un obj JSON
            .then((resolve)=>{
                setProductos(resolve)})
            .catch((err)=>{console.log('ERROR: ' + err)})
            .finally(() => {setLoading(false)}) 
            /* Finally simula que cuando carga la pagina, por el set time out,
            aparece loading en pantalla. Cuando se ejecuta el finally es porque ya
            se consumio la Api y essta lista para usarse. Por tanto loading pasa a false
            y el cartel desaparece*/
        }
              
             
    }, [categoryID,subcategoryID])
    
    return (
        <div>
            <h1>Nuestro Catalogo</h1>
            {loading ? <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div> : 
                         products.map((prod,index) => <Items key={index} price={prod.price} title={prod.title} img={prod.img} ID={prod.id}/> )  }                                

        </div>
    )
}
