/* eslint-disable react/prop-types */


const BrandCard = ({ brand }) => {
    const { img, id, name } = brand
    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-64 w-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default BrandCard;