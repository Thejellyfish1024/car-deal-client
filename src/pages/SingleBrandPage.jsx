

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandCard from "../components/SingleBrandCard";

const SingleBrandPage = () => {
    const [sliders, setSliders] = useState({});
    const [brandCards, setBrandCards] = useState([])
    const allBrands = useLoaderData();
    // console.log(allBrands);

    const { brand } = useParams();
    // console.log(brand);

   useEffect(() =>{
    const singleBrandCards = allBrands.filter(brandCard => brandCard.brand.toLowerCase() == brand.toLowerCase())
    setBrandCards(singleBrandCards)
    console.log(singleBrandCards);
   },[])

    useEffect(() => {
        fetch('http://localhost:5000/advertisements')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const brandSlider = data.find(singleData => singleData.brand == brand)
                // console.log('this is brand slider', brandSlider);
                setSliders(brandSlider);
            })
    }, [])
    // console.log(sliders);



    return (
        <div className="max-w-7xl mx-auto p-4">
            
            <div className="carousel  w-full rounded-lg max-h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliders.ad1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliders.ad2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliders.ad3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 p-5 md:p-0">
                {
                    brandCards.length > 0 ? 
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-10">
                        {
                            brandCards.map(card =><SingleBrandCard key={card._id} card={card}></SingleBrandCard>)
                        }
                    </div>
                    :
                    <div>
                        <h2 className="text-3xl font-bold text-center my-6">No Products Available</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default SingleBrandPage;