import { Badge } from "react-bootstrap"
export const dropdowns = [
    {title: 'Cervezas',
    subcategoria:'Todas las Cervezas',
    subcategoria1 :'Industriales',
    subcategoria2:'Artesanales',
    subcategoria3:'Importadas',
    id:'1'},

    {title:'Vinos',
    subcategoria:'Todos los Vinos',
    subcategoria1 :'Tintos',
    subcategoria2:'Blancos',
    subcategoria3:'Mixtos',
    id:'2'},

    {title:'Espumantes',
    subcategoria:'Todos los Espumantes',
    subcategoria1 :'Rose',
    subcategoria2:'Champagne',
    subcategoria3:'Sidras',
    id:'3' },

    {title:'Destilados',
    subcategoria:'Todos los Destilados',
    subcategoria1 :'Fernet',
    subcategoria2:'Whisky',
    subcategoria3:'Vodkas',
    id:'4'},

    {title:'Combos',
    subcategoria:'Todos los Combos',
    subcategoria1 :'De cervezas',
    subcategoria2:'Fernet',
    subcategoria3:'Vodka',
    id:'5'},
  

]

export const CartWidget = () => {
    //      <Badge bg="secondary">9</Badge>       
    return( 
    <li key='shopping-cart' className='nav-links' id='cart-widget'> 
      <i className="fas fa-shopping-cart"></i>
    </li>)
}