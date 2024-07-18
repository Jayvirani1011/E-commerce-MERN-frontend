import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product-list/ProductList";

export default function Home() {
    return ( 
        <div className="">
            <NavBar>
                <ProductList/>
            </NavBar>
        </div>
     );
}

