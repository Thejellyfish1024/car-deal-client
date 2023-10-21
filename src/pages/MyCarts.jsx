import { useLoaderData } from "react-router-dom";
import Cart from "../components/Cart";



const MyCarts = () => {
    const carts = useLoaderData();
    console.log(carts);
    return (
        <div className="max-w-7xl mx-auto mt-12">
            {
                carts ?
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    carts.map(cart =><Cart key={cart._id} cart={cart}></Cart>)
                }
            </div>
            :
            <div>
                <h2 className="text-3xl font-bold text-center text-red-500">No Products have been added yet</h2>
            </div>
            }
        </div>
    );
};

export default MyCarts;