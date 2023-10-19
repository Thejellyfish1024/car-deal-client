import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex justify-center mb-20">
                <div className="hero lg:px-16 md:px-16 px-4 py-4 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0 lg:w-[500px] md:w-[500px] shadow-2xl bg-base-100">
                            <h2 className="text-3xl font-bold text-center text-purple-500 pt-5">Register Now</h2>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Name</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Enter your name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text" name="url" placeholder="URL" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-purple-500 text-white">Register</button>
                                </div>
                                <p className=" font-medium text-center mt-2">Already have an account ? <span className="text-red-600"><Link to="/login">Please Login</Link></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;