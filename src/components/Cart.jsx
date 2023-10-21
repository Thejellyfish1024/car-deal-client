/* eslint-disable react/prop-types */

import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Cart = ({ cart }) => {
    const { image, description, _id, name, price } = cart;

    const { myCarts, setMyCarts } = useContext(AuthContext)

    const handleDelete = _id => {

        fetch(`http://localhost:5000/carts/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = myCarts.filter(cart => cart._id !== _id)
                    setMyCarts(remaining)
                    Swal.fire({
                        title: 'Successfully Deleted',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
                console.log(data);
            })




    }
    return (
        <div>
            <div className="relative flex flex-col h-[60vh] text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={image}
                        className="w-full h-full"
                        alt="img-blur-shadow"

                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                <h4 className="text-lg font-medium pl-5 text-orange-500 mb-5">$ {price}</h4>
                <div className="p-6 pt-0 flex justify-between">
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Order Now
                    </button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;