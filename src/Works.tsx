// @ts-nocheck

import { FaGithubSquare, FaInternetExplorer } from "react-icons/fa";

export default function Works() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="mt-8 p-4 grid grid-cols-1 gap-8 lg:grid-cols-3 pb-12">

            <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Tennis Stroke Classifier</div>
                    <p>Implemented three deep learning pipelines for tennis stroke classification (Forehand, Backhand, Serve, No-stroke) from 100 short video clips recorded from a fixed rear-court camera, under severe data scarcity constraints.</p><br></br>
                    <p>Built and trained a baseline 2D CNN on single frames, a spatiotemporal 3D CNN from scratch, and a transfer learning model using R3D-18 pretrained on Kinetics-400 to compare spatial vs spatiotemporal modeling.</p><br></br>
                    <p>Designed an end-to-end experimental setup including data preprocessing (16-frame temporal sampling, 112×112 resizing, normalization) and aggressive data augmentation (flips, rotations, color jitter, affine transforms) to combat overfitting.</p>
​                    <p>Tuned hyperparameters and trained models using Adam, weight decay, dropout, early stopping on validation F1, and evaluated with weighted F1, accuracy, per-class precision/recall, and confusion matrices.</p><br></br>
                    <p>Demonstrated that temporal information and transfer learning are critical in low-data regimes, with 3D CNNs substantially outperforming 2D CNNs and the R3D-18 transfer model achieving the best performance with fewer trainable parameters.</p><br></br>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/weather-api-and-train-ticket-reservation" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>



            <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Hospital Management System</div>
                    <p> Built a full-stack hospital platform with RBAC, reducing admin processing time by ~40% and supporting 4+ user roles.</p><br></br>
                    <p>Key features include appointment booking, patient record management, prescription tracking,
                    pharmacy inventory control, blood donation management, AI-powered chatbot, and ML-based disease
                    prediction (heart disease, Parkinson’s, diabetes).</p><br></br>
                    <p>Designed secure, role-based portals for patients, doctors, admins, and pharmacists, improving data security and access control across the platform.</p><br></br>
                    <p>Implemented ML models for multi-disease risk prediction using clinical datasets, helping enable earlier intervention and data-driven decision support</p><br></br>
                    <p>Led end-to-end development from requirements gathering to testing and deployment, including SQL schema design, REST-style endpoints, and UI flows.</p><br></br>
                    <p>Technologies used: HTML, CSS, PHP, JavaScript, Python, SQL, AI, and ML techniques</p>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/hms" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>

                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Car Rent and Purchase App</div>
                    <p>A mobile application using Flutter for renting and purchasing cars, implementing features
                    like user authentication, vehicle listings, to-do list for service and seamless navigation for an optimized
                    user experience.</p>
                    <p>Developed a mobile app with Fast API backend and Flutter UI, handling 1,000+ possible service tasks and dynamic vehicle catalogue.</p>
                    <p>Enforced secure login, dynamic vehicle catalogue, and service task tracking.</p>
                    <p>Connected NoSQL storage using Firebase for live data sync.</p>
                    <p>Implemented real-time push notifications (e.g., booking confirmations, service reminders) to improve user engagement and retention.</p>
                    <p>Designed a scalable app architecture with clear separation of concerns between Flutter UI, FastAPI services, and Firebase data layer.</p>
                    <p>Performed end-to-end testing on Android and iOS emulators/devices to validate flows like login, booking, and service task management.</p>

                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/flutter-car-rent-and-purchase-app" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
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
                    <div className="font-bold text-lg">Weather Alert</div>
                    <p>Simple weather alert notification system for real-time weather updates.</p><br></br>
                    <p>Designed Border Alert System using GPS (latitude/longitude simulation) and microcontroller to notify fishermen before crossing international sea borders (e.g., India-Sri Lanka) and auto-stop engines if needed.​</p>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/weather-alert-using-python" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Virtual tour to Indian Pilgrimages</div>
                    A simple website that allows users to click on pilgrimage images and be redirected to a 360-degree view of the location using Google integration.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://kiran301103.github.io/virtual-visit-to-indian-pilgrimage/KIRAN.html" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/virtual-visit-to-indian-pilgrimage" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div> 

                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">AI chatbot</div>
                    I have created a chatbot using API and integrated in my Hospital Management Project
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://kiran-ai-chatbot.streamlit.app/" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/flutter-car-rent-and-purchase-app" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>


                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Machine Learning Disease Prediction</div>
                    I have created a Machine learning disease prediction using pyton and integrated in my Hospital Management Project
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://kiran-ml-prediction.streamlit.app/" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/Kiran301103/flutter-car-rent-and-purchase-app" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>

            </div>
        </div>
    )
}