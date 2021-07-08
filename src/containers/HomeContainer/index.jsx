import { NavbarComponent } from "../../components/NavbarComponent";
export const HomeContainer = () => {

    //fetch a la base de datos o ajax
    const carrito = [];
    return (
        <div>
            <NavbarComponent cart = {carrito} />
        </div>
    )
}
