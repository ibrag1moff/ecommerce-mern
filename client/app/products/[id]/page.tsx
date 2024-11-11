// utils
import { getSingleProduct } from "@/utils/products";

// types
import { Product } from "@/types/product";

type Params = {
    id: string;
};

export default async function ProductDetails({ params }: { params: Params }) {
    const { id } = params;
    const product: Product = await getSingleProduct(id);

    return (
        <div className="flex flex-col lg:px-16 lg:py-8 xl:flex-row xl:justify-between justify-center items-center gap-8 pb-10 px-2">
            <div className="flex flex-col-reverse gap-3">
                <div className="flex md:flex-row items-center gap-3">
                    <div className="flex items-center justify-center group">
                        <img
                            className="w-full  group-hover:scale-110 transition-all duration-300"
                            src={product.image}
                            alt="Product Image"
                        />
                    </div>
                    <div className="flex items-center justify-center group">
                        <img
                            className="w-full group-hover:scale-110 transition-all duration-300"
                            src={product.image}
                            alt="Product Image"
                        />
                    </div>
                    <div className="flex items-center justify-center group">
                        <img
                            className="w-full group-hover:scale-110 transition-all duration-300"
                            src={product.image}
                            alt="Product Image"
                        />
                    </div>
                </div>
                <div className="relative group">
                    <img
                        className="w-full xl:h-[400px] object-cover transition-all duration-300"
                        src={product?.image}
                        alt="Product Image"
                    />
                    <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/20"></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-9 w-full px-2">
                <div className="flex flex-col gap-1">
                    <h1 className="uppercase font-medium text-lg md:text-xl tracking-[2px]">
                        {product.popular ? "top rated" : ""}
                    </h1>
                    <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-[4px] lg:text-3xl border-b pb-4">
                        {product?.title}
                    </h1>
                </div>
                <div className="flex items-center gap-4 border-b pb-4">
                    <span className="font-bold text-xl md:text-2xl">
                        ${product.price}
                    </span>
                </div>
                <span className="flex items-center gap-2 text-lg md:text-xl font-medium tracking-[3px] border-b pb-4">
                    Category:
                    <span className="uppercase">{product?.category}</span>
                </span>
                <p className="max-w-[500px] font-medium tracking-[3px] md:text-xl border-b pb-4">
                    {product?.description}
                </p>
                <button className="bg-black py-3 px-8 xl:hover:bg-[#0e0e0e] transition-all duration-300 text-white uppercase tracking-[4px] font-medium rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
