
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const MyCarts = () => {
    const { myCarts } = useContext(AuthContext)
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-12 min-h-[40vh]">
                {
                    myCarts.length > 0 ?
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                            {
                                myCarts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
                            }
                        </div>
                        :
                        <div>
                            <h2 className="text-3xl font-bold text-center text-red-500">No Products have been added yet</h2>
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCarts;