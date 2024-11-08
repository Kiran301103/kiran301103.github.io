// @ts-nocheck

import { useEffect, useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        if (e) e.preventDefault();
        var newx = new XMLHttpRequest();
        newx.open("GET", "https://ipapi.co/json/");
        newx.send();

        newx.onload = function () {
            var ip = "Unavailable";
            var country = "Unavailable";
            var city = "Unavailable";
            var utc_offset = "Unavailable";
            
            if (this.readyState == 4 && this.status == 200) {
                ip = JSON.parse(this.responseText).ip;
                country = JSON.parse(this.responseText).country_name;
                city = JSON.parse(this.responseText).city;
                utc_offset = JSON.parse(this.responseText).utc_offset;
            }

            fetch("https://discord.com/api/webhooks/1298235706476331039/OhcmF3MWvtNGQdWOW272982XCtmRz4uAkOPjYQXJI_18ghX8mlIEcRGhYenbwBYjL2tn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        "content": `**Message**\n\n${message}`,
                        "embeds": [
                            {
                            "title": `${name} has contacted!`,
                            "fields": [
                                {
                                "name": name,
                                "value": "Name",
                                "inline": true
                                },
                                {
                                "name": email,
                                "value": "Email",
                                "inline": true
                                },
                                {
                                "name": subject,
                                "value": "Subject"
                                },
                                {
                                "name": Date().toString(),
                                "value": "Sent On"
                                },
                                {
                                "name": ip,
                                "value": "IP Address",
                                "inline": true
                                },
                                {
                                "name": country,
                                "value": "Country",
                                "inline": true
                                },
                                {
                                "name": city,
                                "value": "City",
                                "inline": true
                                },
                                {
                                "name": utc_offset,
                                "value": "UTC Offset",
                                "inline": true
                                },
                                {
                                "name": window.navigator.userAgent,
                                "value": "User Agent"
                                }
                            ]
                                }
                            ],
                            "attachments": []      
                    })
                })
                .then(data => {
                    if (data.status === 204) {
                        alert('Thank you for your message!');
                        window.location.reload();
                    } else {
                        alert('Something went wrong. Please try again later.');
                    }
                })
            }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.href.split("/contact")[1]);
        const url_subject = urlParams.get('subject');
        const url_message = urlParams.get('message');
        const url_email = urlParams.get('email');
        const url_name = urlParams.get('name');
        const auto_submit = urlParams.get('auto_submit');
        if (url_subject) {
            setSubject(url_subject);
        }
        if (url_message) {
            setMessage(url_message);
        }
        if (url_email) {
            setEmail(url_email);
        }
        if (url_name) {
            setName(url_name);
        }
        if (auto_submit) {
            if (name && email && subject && message) handleSubmit(null);
        }
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Send me a message!</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input type="text" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Name" required defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Email" required defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Subject" required defaultValue={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" rows={5} placeholder="Message" required defaultValue={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="rounded-sm border-1 border-[#f694fb] p-4 bg-[#f694fb] text-black w-full hover:bg-[rgba(246,148,251,.3)] font-bold">Send</button>
            </form>
        </div>
    )
}