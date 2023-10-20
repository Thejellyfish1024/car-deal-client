/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BsFillStarFill } from 'react-icons/bs';


const SingleBrandCard = ({ card }) => {
    const { brand, image, type, name, price, rating } = card;
    return (

        <div className=" flex justify-center">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} className="w-[450px] h-72" alt="Shoes" /></figure>
                <div className="md:text-xl font-bold flex justify-between p-4">
                    <p>Type : {type}</p>
                    <h2 className="uppercase text-right ">Brand : {brand}</h2>
                </div>
                <div className="card-body ">
                    <div className="flex flex-col gap-5 md:flex-row justify-between mb-6">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">$ {price}</div>
                        </h2>
                        <div className="flex items-center gap-2">
                            <BsFillStarFill className="text-orange-500"></BsFillStarFill>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link><div className="badge font-semibold  badge-outline">See Details</div></Link>
                        <Link><div className="badge font-semibold badge-outline">Update</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandCard;