// components
import ProductForm from "@/components/ProductForm";

export default function CreateProduct() {
    return (
        <div className="py-24 px-3 min-h-screen">
            <h1 className="text-center text-4xl font-semibold mb-12 md:text-5xl">
                Create New Product
            </h1>
            <ProductForm />
        </div>
    );
}
