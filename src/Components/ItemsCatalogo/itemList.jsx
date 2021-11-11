
// Agregar URL, Agregar Stock
import quilmes_imagen from 'D:/Code/React/Drinks/drinks/src/image/quilmes.png'
import otro_loco_mas from 'D:/Code/React/Drinks/drinks/src/image/otro loco mas.png'
import shofferhofer from 'D:/Code/React/Drinks/drinks/src/image/shofferhofer.png'
import vino_toro from 'D:/Code/React/Drinks/drinks/src/image/vino toro.png'
import red_label from 'D:/Code/React/Drinks/drinks/src/image/red label.png'
import smirnoff from 'D:/Code/React/Drinks/drinks/src/image/smirnoff.png'
export const productos = [
    {id:'1', categoria: 'Cervezas', subcategoria: 'Industriales', img: quilmes_imagen, title:'Quilmes Six Pack', price:'380', href:'/Quilmes'},
    {id:'2', categoria: 'Cervezas', subcategoria: 'Importadas', img:shofferhofer, title:'ShofferHofer', price:'700', href:'/Hoeffleganger'},
    {id:'3', categoria: 'Vinos', subcategoria: 'Tintos', img: otro_loco_mas, title:'Otro Loco Mas', price:'400', href:'/Otro_Loco_Mas'},
    {id:'4', categoria: 'Vinos', subcategoria: 'Blancos', img: vino_toro, title:'Vino Toro', price:'200', href:'/Vino_Toro'},
    {id:'5', categoria: 'Destilados', subcategoria: 'Whisky', img: red_label, title:'Red Label', price:'2000', href:'/Red_Label'},
    {id:'6', categoria: 'Destilados', subcategoria: 'Vodkas', img: smirnoff, title:'Smirnoff', price:'700', href:'/Smirnoff'},
]

// Simulacion de delay de busqueda de datos de una Api
// Por eso uso settimeout, y tambien por eso no uso la promesa fetch() directamente

const getFetch = new Promise((resolve, reject) =>{

    const fectchIsSuccesful = true

    if(fectchIsSuccesful){
        setTimeout(()=>{
            resolve(productos)
        }, 1500)
    }else{
        setTimeout(()=>{
            reject('ERROR: 404 NOT FOUND')
        }, 1500)
    }
},
)

export default getFetch;

// si productos fuera una API entonces yo puedo buscar un atajo con la promesa fetch()

/*useEffect(() => {
        fetch(http//:www.apicualquiera.com)
        .then((resolve)=> resolve.json())
        .then((resolve)=>setProductos(resolve))
        .catch((err)=>{alert('ERROR: ' + err)})
        .finally
       
        
    }, []) */

/* puedo acotarlo aun mas de esta manera
    const [products, setProductos] = useState([])

const getFecth = async () =>{ se llama async para decir q es una funcion asincronica
    conts getApiJson = await fetch('http//:www.apicualquiera.com')
    const JsonParse = getApiJson.json() 
    setProductos(JsonParse)
} */