import cart from '../../assets/cart.svg'

const CartWidget = () =>{
    return(
        <div class="cart-cont">
            <img src={cart} alt= "cart-widget"/>
            <p>$0,00</p>
        </div>

    )
}

export default CartWidget