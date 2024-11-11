// next
import Link from "next/link";

// components
import SectionTitle from "./SectionTitle";

export default function Categories() {
    return (
        <div className="py-20 border-b">
            <SectionTitle title="categories" />
            <div className="flex flex-col items-center justify-center s:flex-row s:flex-wrap gap-8 px-2">
                <div className="relative bg-categoryOne bg-center bg-cover w-full h-[300px] s:w-[300px]">
                    <Link
                        href={"/men"}
                        className="absolute bottom-4 left-0 right-0 text-center bg-white mx-8 py-2 uppercase tracking-[3px] font-medium xl:hover:bg-[#e5e5e5] transition-all duration-300 rounded-xl"
                    >
                        learn more
                    </Link>
                </div>
                <div className="relative bg-categoryTwo bg-center bg-cover w-full h-[300px] s:w-[300px]">
                    <Link
                        href={"/women"}
                        className="absolute bottom-4 left-0 right-0 text-center bg-white mx-8 py-2 uppercase tracking-[3px] font-medium xl:hover:bg-[#e5e5e5] transition-all duration-300 rounded-xl"
                    >
                        learn more
                    </Link>
                </div>
                <div className="relative bg-categoryThree bg-center bg-cover w-full h-[300px] s:w-[300px]">
                    <button className="absolute bottom-4 left-0 right-0 bg-white mx-8 py-2 uppercase tracking-[3px] font-medium xl:hover:bg-[#e5e5e5] transition-all duration-300 rounded-xl">
                        learn more
                    </button>
                </div>
            </div>
        </div>
    );
}
