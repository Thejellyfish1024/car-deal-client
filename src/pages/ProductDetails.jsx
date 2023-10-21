import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ProductDetails = () => {
    const { myCarts , setMyCarts} = useContext(AuthContext)
    const product = useLoaderData();
    const { brand, image, description, name, price } = product;
    console.log(product);
    const alreadyAdded = myCarts?.find(cart => cart._id == product._id)

    const handleAddToCart = e => {
        e.preventDefault();

        if (!alreadyAdded) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        const updatedCarts = [...myCarts,product]
                        setMyCarts(updatedCarts)
                        Swal.fire({
                            title: 'Successfully Added to Carts',
                            text: 'Go to My Cart to order now',
                            icon: 'success',
                            confirmButtonText: 'Close'
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Already Added',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
    }
    return (
        <div className="max-w-7xl mx-auto lg:p-2 p-5 mt-12">
            <div className="relative flex w-full flex-col  lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative lg:w-3/5 lg:h-[60vh] w-full lg:p-0 lg:m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        alt="image"
                        className="object-cover rounded-lg w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {brand}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {description}
                    </p>
                    <h4 className="text-xl font-semibold text-orange-500 mb-10">Price : {price}$</h4>
                    <button onClick={handleAddToCart}
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;