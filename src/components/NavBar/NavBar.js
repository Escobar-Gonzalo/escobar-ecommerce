import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

function NavBar() {
    return (
        <nav class="navBar">
            <div class= "item-cont">
            <img class="logo" src={logo}></img>
            <div class= "button-cont">
                <a href="#">Perros</a>
                <a href="#">Gatos</a>
                <a href="#">Accesorios</a>
                <a href="#">Juguetes</a>
            </div>
            <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar