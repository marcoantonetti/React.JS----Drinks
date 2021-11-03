
export const dropdowns = [
    {title: 'Cervezas',
    href1 : 'Honey',
    href2:'Ipa',
    href3:'Lager'},

    {title:'Vinos',
    href1 : 'Tintos',
    href2:'Blancos',
    href3:'Mixtos'},

    {title:'Espumantes',
    href1 : 'Rose',
    href2:'Champagne',
    href3:'Sidras'},

    {title:'Destilados',
    href1 : 'Aperitivos (Fernet)',
    href2:'Whisky',
    href3:'Vodkas'},

    {title:'Combos',
    href1 : 'De cervezas',
    href2:'Fernet',
    href3:'Vodka'},
  

]

export const CartWidget = () => {
    return( 
    <li key='shopping-cart' className='nav-links' id='cart-widget'> 
         <a href=""></a> 
         <i className="fas fa-shopping-cart"></i>
    </li>)
}