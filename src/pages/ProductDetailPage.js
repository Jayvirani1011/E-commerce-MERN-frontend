import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product/components/ProductDetail";

export default function ProductDetailPage() {
    return (
        <div>
            <NavBar>
                <ProductDetail />
            </NavBar>
        </div>
    );
}
