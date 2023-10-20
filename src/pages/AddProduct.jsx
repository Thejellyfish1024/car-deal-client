// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button

import Footer from "../components/Footer";

const AddProduct = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center my-8 text-purple-500">Add Your Product</h2>
                <form>
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Product Name</p>
                            <input type="text" name="name" placeholder="Name" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Image url</p>
                            <input type="text" name="image" placeholder="Url" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Brand Name</p>
                            <input type="text" name="brand" placeholder="Brand Name" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Type of the product</p>
                            <input type="text" name="type" placeholder="Type" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Price of the product</p>
                            <input type="text" name="price" placeholder="Price" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Rating</p>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Description</p>
                            <textarea name="description" className="textarea textarea-primary w-4/5 h-full" placeholder="Description"></textarea>
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Add button</p>
                            <input type="text" name="button" placeholder="Button" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>

                </form>
            </div>
            <div className="mt-36">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddProduct;