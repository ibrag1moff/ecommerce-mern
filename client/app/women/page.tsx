// components
import WomenHero from "@/components/WomenHero";
import ProductsList from "@/components/ProductsList";

// types
import { Product } from "@/types/product";

// utils
import { getAllProducts } from "@/utils/products";

export default async function WomenCollection() {
    const products = await getAllProducts();

    const womenProducts = products.filter(
        (product: Product) => product.category == "Women"
    );

    return (
        <>
            <WomenHero />
            <ProductsList id="#women" products={womenProducts} />
        </>
    );
}
