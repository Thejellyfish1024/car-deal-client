/* eslint-disable no-useless-escape */
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const Register = () => {


    const {createUser, logOut, handleUpdateProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const url = form.get('url')
        const email = form.get('email')
        const password = form.get('password')
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            return toast.error('Password have to be minimum 6 characters . It should include capital letter and special character')
        }
        console.log(name, url ,email, password);
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success('Registration Done Successfully!!')
            // result.user.displayName = name;
            // result.user.photoURL = url;
            console.log(result.user);
            // setDisplayName(name)
            // setPhotoURL(url)
            handleUpdateProfile(name,url)
            logOut();
            navigate('/login');
        })
        .catch(error =>{
            console.log(error);
            toast.error(error.message)
        })
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex justify-center mb-20">
                <div className="hero lg:px-16 md:px-16 px-4 py-4 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0 lg:w-[500px] md:w-[500px] shadow-2xl bg-base-100">
                            <h2 className="text-3xl font-bold text-center text-purple-500 pt-5">Register Now</h2>
                            <form onSubmit={handleRegister} className="card-body">
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