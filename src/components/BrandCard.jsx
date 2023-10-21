/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const BrandCard = ({ singleBrand }) => {
    const {darkMode} = useContext(AuthContext)
    const { img, name,brand } = singleBrand
    return (
        <Link to={`/${brand}`}>
            <div className={`card lg:w-96  shadow-xl ${darkMode ? 'bg-gray-500' : 'bg-base-300'}`}>
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl md:h-64 h-56 w-64 md:w-72" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;