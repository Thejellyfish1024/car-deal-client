import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-10 space-y-4">
            <h2 className="text-4xl font-bold">Oops!! Something Went Wrong</h2>
            <h4 className="text-2xl font-bold">The page does not exist</h4>
            <Link to='/'><button className="btn btn-primary mt-5">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;