import Footer from "../components/Footer";


const UpdateProduct = () => {
    return (
            <div className="p-3">
            <div className="max-w-7xl mx-auto bg-base-300 p-4 rounded-xl">
                <h2 className="text-3xl font-bold text-center my-8 text-purple-500">Update Product</h2>
                <form className="p-5">
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Product Name</p>
                            <input type="text" name="name" placeholder="Name" required className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Image url</p>
                            <input type="text" name="image" required placeholder="Url" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Brand Name</p>
                            <input type="text" name="brand" required placeholder="Brand Name" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Type of the product</p>
                            <input type="text" name="type" required placeholder="Type" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:flex gap-12">
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Price of the product</p>
                            <input type="text" name="price" required placeholder="Price" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl font-semibold my-3">Rating</p>
                            <input type="text" name="rating" required placeholder="Rating" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}

                    
                    <button className="btn btn-success text-xl font-bold mt-5">
                        <input type="submit" value="Submit" />
                    </button>

                </form>
            </div>
            <div className="mt-36">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateProduct;