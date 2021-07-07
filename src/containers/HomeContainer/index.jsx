import { NavbarComponent } from "../../components/NavBarComponent";
export const HomeContainer = () => {

    //fetch a la base de datos o ajax
    const carrito = [];
    return (
        <div>
            <NavbarComponent cart={carrito} />
        </div>
    )
}