

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[84vh]" style={{ backgroundImage: 'url(https://i.ibb.co/txhfHm9/car-Deal-Banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-10 md:text-5xl text-3xl font-bold">Best Automotive Deal For You</h1>
                        {/* <h3>Best deals for</h3> */}
                        <p className="mb-5 md:text-2xl text-xl font-semibold text-pink-400">Bringing all the luxury brands you desire with the best deals !</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;