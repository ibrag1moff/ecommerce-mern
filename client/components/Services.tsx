// icons
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

export default function Services() {
    const services = [
        {
            id: 1,
            icon: <TbTruckDelivery size={50} />,
            title: "Free delivery",
            text: "US Orders Only",
        },
        {
            id: 2,
            icon: <BiSupport size={50} />,
            title: "24/7 support",
            text: "Always-available Support.",
        },
        {
            id: 3,
            icon: <GiReturnArrow size={45} />,
            title: "fast return",
            text: "Easy and Fast Return",
        },
        {
            id: 4,
            icon: <MdOutlinePayment size={50} />,
            title: "secure payment",
            text: "100% Secure Payment",
        },
    ];
    return (
        <div className="flex flex-col s:flex-row s:flex-wrap md:gap-16 xl:gap-36 items-center border-b justify-center gap-12 py-20 px-2 md:px-8">
            {services.map((service) => (
                <div
                    className="flex flex-col items-center justify-center"
                    key={service.id}
                >
                    <span className="border-2 border-gray-500 rounded-full p-2 mb-2">
                        {service.icon}
                    </span>
                    <h3 className="font-medium uppercase text-xl ">
                        {service.title}
                    </h3>
                    <p className="text-gray-500">{service.text}</p>
                </div>
            ))}
        </div>
    );
}
