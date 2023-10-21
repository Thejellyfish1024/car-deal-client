/* eslint-disable react/no-unescaped-entities */
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {

    const { signInUser , googleSignIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Logged In!!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto mb-10">
            <div className=" flex justify-center">
                <div className="hero p-8 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 lg:w-96 md:w-96 max-w-sm shadow-2xl bg-base-100">
                            <h2 className="text-3xl font-bold text-center text-purple-500 pt-5">Login Now</h2>
                            <form onSubmit={handleLogin} className="card-body">
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
                                <button onClick={handleGoogle} className="btn w-full normal-case border-2 font-semibold text-lg border-purple-500" ><BsGoogle className="text-purple-500 text-2xl"></BsGoogle> Google</button>
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