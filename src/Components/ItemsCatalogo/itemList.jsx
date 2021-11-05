

export const productos = [
    {id: 1, categoria: 'cervezas', subcategoria: 'nacional', img:'drinks\public\quilmes.png', title:'Quilmes Six Pack', price:'380'},
    {id: 2, categoria: 'cervezas', subcategoria: 'importada', img:'drinks\public\quilmes.png', title:'Hoeffleganger', price:'700'},
    {id: 3, categoria: 'vino', subcategoria: 'rosado', img:'drinks\public\quilmes.png', title:'Uno Mas', price:'400'},
    {id: 4, categoria: 'vino', subcategoria: 'blanco', img:'drinks\public\quilmes.png', title:'Vino Toro', price:'200'},
    {id: 5, categoria: 'destilado', subcategoria: 'whisky', img:'drinks\public\quilmes.png', title:'Red Label', price:'2000'},
    {id: 6, categoria: 'destilado', subcategoria: 'vodka', img:'drinks\public\quilmes.png', title:'Smirnoff', price:'700'},
]

// Simulacion de delay de busqueda de datos de una Api
// Por eso uso settimeout, y tambien por eso no uso la promesa fetch() directamente

const getFetch = new Promise((resolve, reject) =>{

    const fectchIsSuccesful = true

    if(fectchIsSuccesful){
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    }else{
        setTimeout(()=>{
            reject('ERROR: 404 NOT FOUND')
        }, 3000)
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