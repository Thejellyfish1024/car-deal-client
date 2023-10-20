

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleBrandPage = () => {
    const [sliders, setSliders] = useState({});
    const allBrands = useLoaderData();
    console.log(allBrands);

    const { brand } = useParams();
    console.log(brand);

    useEffect(() => {
        fetch('http://localhost:5000/advertisements')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const brandSlider = data.find(singleData => singleData.brand == brand)
                console.log('this is brand slider', brandSlider);
                setSliders(brandSlider);
            })
    }, [])
    console.log(sliders);



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
            <h2 className="text-3xl font-bold text-center py-8 uppercase">{brand}</h2>
        </div>
    );
};

export default SingleBrandPage;