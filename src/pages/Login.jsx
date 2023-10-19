/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";


const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-7xl mx-auto mb-10">
            <div className=" flex justify-center">
                <div className="hero p-8 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 lg:w-96 md:w-96 max-w-sm shadow-2xl bg-base-100">
                            <h2 className="text-3xl font-bold text-center text-purple-500 pt-5">Login Now</h2>
                            <form className="card-body">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email address</span>
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
                                    <button className="btn btn-primary bg-purple-500 text-white">Login</button>
                                </div>
                                <p className=" font-medium text-center mt-2">Don't have an account ? <span className="text-red-600"><Link to="/register">Register</Link></span></p>
                            </form>
                            <div className="px-8 py-4">
                                <button className="btn btn-primary w-full hover:bg-blue-600" >Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;