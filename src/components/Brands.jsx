import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('/brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
        console.log(brands);
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-12">Luxury Automotive Brands</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-6 gap-6">
                {
                    brands.map(singleBrand => <BrandCard key={singleBrand.id} singleBrand={singleBrand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;