// @ts-nocheck

import { FaGithubSquare, FaInternetExplorer } from "react-icons/fa";

function ProjectCard({ title, children, links }) {
    return (
        <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)]">
            <div className="font-bold text-lg">{title}</div>
            <div className="flex-1">{children}</div>
            <div className="mt-4 flex gap-2 h-10">
                {links.map((link) => (
                    <a
                        key={link.href}
                        className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon} {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Works() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="mt-8 p-4 grid grid-cols-1 gap-8 lg:grid-cols-3 pb-12">

                <ProjectCard
                    title="Tennis Stroke Classifier"
                    links={[{ href: "https://github.com/Kiran301103/Tennis-Stoke-Classifier", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Implemented three deep learning pipelines for tennis stroke classification (Forehand, Backhand, Serve, No-stroke) from 100 short video clips recorded from a fixed rear-court camera, under severe data scarcity constraints.</p><br />
                    <p>Built and trained a baseline 2D CNN on single frames, a spatiotemporal 3D CNN from scratch, and a transfer learning model using R3D-18 pretrained on Kinetics-400 to compare spatial vs spatiotemporal modeling.</p><br />
                    <p>Designed an end-to-end experimental setup including data preprocessing (16-frame temporal sampling, 112×112 resizing, normalization) and aggressive data augmentation (flips, rotations, color jitter, affine transforms) to combat overfitting.</p>
                    <p>Tuned hyperparameters and trained models using Adam, weight decay, dropout, early stopping on validation F1, and evaluated with weighted F1, accuracy, per-class precision/recall, and confusion matrices.</p><br />
                    <p>Demonstrated that temporal information and transfer learning are critical in low-data regimes, with 3D CNNs substantially outperforming 2D CNNs and the R3D-18 transfer model achieving the best performance with fewer trainable parameters.</p>
                </ProjectCard>

                <ProjectCard
                    title="Multi-Modal Breast Cancer Classification"
                    links={[{ href: "https://github.com/insight-ucd/comp41840-project-team-4", label: "View on Github (team project)", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Developed a multi-modal breast cancer classification system combining ultrasound imaging and clinical tabular data using deep learning and machine learning. Team project — my contributions: DenseNet169 imaging pipeline and multimodal fusion ensembling.</p><br />
                    <p>Implemented mask-guided lesion cropping, DenseNet169 transfer learning, advanced augmentation, and test-time augmentation for imaging performance.</p><br />
                    <p>Built and benchmarked tabular ML models (XGBoost, LightGBM, Random Forest) with Optuna hyperparameter tuning, calibration, and late-fusion ensembling.</p><br />
                    <p>Achieved <b>AUC &gt; 0.94</b> through multimodal fusion with Grad-CAM explainability and quantitative localisation evaluation (mIoU).</p>
                </ProjectCard>

                <ProjectCard
                    title="Online Glyph Classification & Mathematical Expression Recognition"
                    links={[]}
                >
                    <p>Developed deep learning pipelines for handwritten mathematical expression recognition using CNNs, GRU Seq2Seq, and Transformer architectures.</p><br />
                    <p>Achieved <b>94.53% glyph classification accuracy</b> and 91%+ Levenshtein Accuracy on sequence generation tasks.</p><br />
                    <p>Implemented variable-length sequence handling, dynamic batching, attention masking, teacher forcing, and mixed precision training.</p>
                </ProjectCard>

                <ProjectCard
                    title="Risk-Aware Health Insurance Recommender"
                    links={[{ href: "https://github.com/Kiran301103/ML-Deployment", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Built a production-ready RAG system using FAISS vector search, BM25 retrieval, and LLM reranking for personalized insurance recommendations.</p><br />
                    <p>Developed FastAPI backend services and structured document processing pipelines, with semantic document chunking and LLM-assisted reasoning for improved accuracy and user trust.</p>
                </ProjectCard>

                <ProjectCard
                    title="Ethical Validation of Clinical AI"
                    links={[{ href: "https://github.com/Kiran301103/AI--Ethics", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Developed a structural simulation of the Epic Sepsis Model (ESM) to enable ethical validation of a deployed clinical AI system without replicating proprietary internals.</p><br />
                    <p>Formalised functional and ethical goals as executable constraints — including false-positive minimisation, over/under-reliance detection, and auditability.</p><br />
                    <p>Reproduced and evaluated deep learning architectures across 128 benchmark datasets using TensorFlow, improving classification accuracy by 1.30% via feature engineering and GPU-accelerated training.</p>
                </ProjectCard>

                <ProjectCard
                    title="AI Recommendation Trust Study (HCAI)"
                    links={[{ href: "https://github.com/Kiran301103/HCAI", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Designed and built an interactive HCI experiment studying how AI confidence levels influence user trust and purchase decisions in recommender systems.</p><br />
                    <p>Built a responsive web-based experimental interface simulating AI product recommendations under confident vs. uncertain conditions.</p><br />
                    <p>Ran a between-subjects experimental design with hypothesis testing and t-test statistical analysis.</p>
                </ProjectCard>

                <ProjectCard
                    title="Hospital Management System"
                    links={[{ href: "https://github.com/Kiran301103/hms", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Built a full-stack hospital platform with RBAC, reducing admin processing time by ~40% and supporting 4+ user roles.</p><br />
                    <p>Key features include appointment booking, patient record management, prescription tracking, pharmacy inventory control, blood donation management, AI-powered chatbot, and ML-based disease prediction (heart disease, Parkinson's, diabetes).</p><br />
                    <p>Designed secure, role-based portals for patients, doctors, admins, and pharmacists, improving data security and access control across the platform.</p><br />
                    <p>Technologies used: HTML, CSS, PHP, JavaScript, Python, SQL, AI, and ML techniques.</p>
                </ProjectCard>

                <ProjectCard
                    title="Car Rent and Purchase App"
                    links={[{ href: "https://github.com/Kiran301103/flutter-car-rent-and-purchase-app", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>A mobile application using Flutter for renting and purchasing cars, implementing features like user authentication, vehicle listings, a to-do list for service, and seamless navigation for an optimized user experience.</p>
                    <p>Developed with a FastAPI backend and Flutter UI, handling 1,000+ possible service tasks and a dynamic vehicle catalogue, with NoSQL storage via Firebase for live data sync.</p>
                    <p>Implemented real-time push notifications (e.g., booking confirmations, service reminders) to improve user engagement and retention.</p>
                </ProjectCard>

                <ProjectCard
                    title="Weather API and Train Ticket Reservation System"
                    links={[{ href: "https://github.com/Kiran301103/weather-api-and-train-ticket-reservation", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>A web application integrating weather data via API and providing train ticket reservation functionalities, enhancing user experience with real-time updates and seamless booking.</p>
                </ProjectCard>

                <ProjectCard
                    title="Weather Alert"
                    links={[{ href: "https://github.com/Kiran301103/weather-alert-using-python", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }]}
                >
                    <p>Simple weather alert notification system for real-time weather updates.</p><br />
                    <p>Designed a border alert system using GPS (latitude/longitude simulation) and a microcontroller to notify fishermen before crossing international sea borders, with auto-stop of engines if needed.</p>
                </ProjectCard>

                <ProjectCard
                    title="Virtual Tour to Indian Pilgrimages"
                    links={[
                        { href: "https://kiran301103.github.io/virtual-visit-to-indian-pilgrimage/KIRAN.html", label: "Try", icon: <FaInternetExplorer className="w-6 h-6" /> },
                        { href: "https://github.com/Kiran301103/virtual-visit-to-indian-pilgrimage", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }
                    ]}
                >
                    <p>A website that allows users to click on pilgrimage images and be redirected to a 360-degree view of the location using Google integration.</p>
                </ProjectCard>

                <ProjectCard
                    title="AI Chatbot"
                    links={[
                        { href: "https://kiran-ai-chatbot.streamlit.app/", label: "Try", icon: <FaInternetExplorer className="w-6 h-6" /> },
                        { href: "https://github.com/Kiran301103/hms", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }
                    ]}
                >
                    <p>An AI chatbot built using an LLM API and integrated into the Hospital Management System project.</p>
                </ProjectCard>

                <ProjectCard
                    title="Machine Learning Disease Prediction"
                    links={[
                        { href: "https://kiran-ml-prediction.streamlit.app/", label: "Try", icon: <FaInternetExplorer className="w-6 h-6" /> },
                        { href: "https://github.com/Kiran301103/multiple_disease_prediction", label: "View on Github", icon: <FaGithubSquare className="w-6 h-6" /> }
                    ]}
                >
                    <p>A machine learning-based multi-disease prediction system (heart disease, Parkinson's, diabetes), integrated into the Hospital Management System project.</p>
                </ProjectCard>

            </div>
        </div>
    )
}
