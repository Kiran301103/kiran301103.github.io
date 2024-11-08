// @ts-nocheck

import { FaGithubSquare, FaInternetExplorer } from "react-icons/fa";

export default function Works() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">My Works</h1>
            <div className="mt-8 p-4 grid grid-cols-1 gap-8 lg:grid-cols-3 pb-12">
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Weather Alert</div>
                    Simple weather alert notification system for real-time weather updates.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/weather-alert-using-python" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Virtual tour to Indian Pilgrimages</div>
                    A simple website that allows users to click on pilgrimage images and be redirected to a 360-degree view of the location using Google integration.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/virtual-visit-to-indian-pilgrimage" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Weather API and Train Ticket Reservation System</div>
                    A simple a web application integrating weather data via API and providing train ticket reservation
                    functionalities, enhancing user experience with real-time updates and seamless booking. 
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/weather-api-and-train-ticket-reservation" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Car Rent and Purchase App</div>
                    A mobile application using Flutter for renting and purchasing cars, implementing features
                    like user authentication, vehicle listings, to-do list for service and seamless navigation for an optimized
                    user experience.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/flutter-car-rent-and-purchase-app" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Hospital Management System</div>
                    <p>Developed a comprehensive web platform for hospital management with role-based logins for
                    patients, doctors, admins, and pharmacists.</p><br></br>
                    <p>Key features include appointment booking, patient record management, prescription tracking,
                    pharmacy inventory control, blood donation management, AI-powered chatbot, and ML-based disease
                    prediction (heart disease, Parkinson’s, diabetes).</p><br></br>
                    <p>Technologies used: HTML, CSS, PHP, JavaScript, Python, SQL, AI, and ML techniques</p>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="" target="_blank"><FaInternetExplorer className="w-6 h-6" /> View Deployment</a>
                    </div>
                </div>
            </div>
        </div>
    )
}