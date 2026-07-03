import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-4 mt-24 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-lg">This page doesn't exist.</p>
            <Link className="inline-block mt-8 bg-[#f694fb] hover:bg-[#f694fb]/80 p-3 rounded-lg text-black font-bold" to="/">
                Back to Home
            </Link>
        </div>
    );
}
