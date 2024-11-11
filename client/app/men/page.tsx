// components
import MenHero from "@/components/MenHero";
import ProductsList from "@/components/ProductsList";

// types
import { Product } from "@/types/product";

// utils
import { getAllProducts } from "@/utils/products";

export default async function MenCollection() {
    const products = await getAllProducts();

    const menProducts = products.filter(
        (product: Product) => product.category == "Men"
    );

    return (
        <>
            <MenHero />
            <ProductsList id="#men" products={menProducts} />
        </>
    );
}
