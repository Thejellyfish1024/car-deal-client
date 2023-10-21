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

    // const handleAddProduct = e =>{
    //     e.preventDefault();

    //     const form = e.target;
    //     const name = form.name.value;
    //     const image = form.image.value; 
    //     const brand = form.brand.value; 
    //     const type = form.type.value; 
    //     const price = form.price.value; 
    //     const rating = form.rating.value; 
    //     const description = form.description.value;

    //     const newProduct = {name , image , brand, type, price , rating, description}
    //     console.log(newProduct);

    //     fetch('http://localhost:5000/cars',{
    //         method:'POST',
    //         headers:{
    //             'content-type' : 'application/json'
    //         },
    //         body : JSON.stringify(newProduct)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         form.reset();
    //     })
    // }

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center my-8 text-purple-500">Add Your Product</h2>
                <form >
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Product Name</p>
                            <input type="text" name="name" placeholder="Name" required className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Image url</p>
                            <input type="text" name="image" required placeholder="Url" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Brand Name</p>
                            <input type="text" name="brand" required placeholder="Brand Name" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Type of the product</p>
                            <input type="text" name="type" required placeholder="Type" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex gap-12">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Price of the product</p>
                            <input type="text" name="price" required placeholder="Price" className="input w-4/5 input-bordered input-primary " />
                        </div>
                        <div className="w-1/2">
                            <p className="text-xl font-semibold my-3">Rating</p>
                            <input type="text" name="rating" required placeholder="Rating" className="input input-bordered input-accent w-4/5" />
                        </div>
                    </div>
                    {/*  */}

                    <div className="w-1/2">
                        <p className="text-xl font-semibold my-3">Description</p>
                        <textarea name="description" className="textarea textarea-primary w-4/5 h-40" required placeholder="Description"></textarea>
                    </div>
                    <button className="btn btn-success text-xl font-bold mt-5">
                        <input type="submit" value="Add Product" />
                    </button>

                </form>
            </div>
            <div className="mt-36">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddProduct;