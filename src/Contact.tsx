// @ts-nocheck

import { useEffect, useState } from "react";

// The webhook URL is injected at build time from an environment variable
// (VITE_DISCORD_WEBHOOK) so it never ships as a hardcoded string in the
// client bundle. See .env.example for setup instructions.
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e) {
        if (e) e.preventDefault();

        if (!DISCORD_WEBHOOK_URL) {
            alert("Contact form is not configured yet. Please email me directly at kiran301103@gmail.com");
            return;
        }

        setSubmitting(true);

        fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `**Message**\n\n${message}`,
                embeds: [
                    {
                        title: `${name} has contacted!`,
                        fields: [
                            { name: name, value: "Name", inline: true },
                            { name: email, value: "Email", inline: true },
                            { name: subject, value: "Subject" },
                            { name: new Date().toString(), value: "Sent On" }
                        ]
                    }
                ],
                attachments: []
            })
        })
            .then((res) => {
                setSubmitting(false);
                if (res.status === 204) {
                    alert("Thank you for your message!");
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                } else {
                    alert("Something went wrong. Please try again later.");
                }
            })
            .catch(() => {
                setSubmitting(false);
                alert("Something went wrong. Please try again later.");
            });
    }

    // Pre-fill the form from URL params (e.g. a "Hire Me" deep link elsewhere
    // in the app). Deliberately does NOT auto-submit — a URL should never be
    // able to trigger a message send on its own, or it becomes a spam vector.
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
        const url_subject = urlParams.get("subject");
        const url_message = urlParams.get("message");
        const url_email = urlParams.get("email");
        const url_name = urlParams.get("name");
        if (url_subject) setSubject(url_subject);
        if (url_message) setMessage(url_message);
        if (url_email) setEmail(url_email);
        if (url_name) setName(url_name);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Send me a message!</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input type="text" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea className="rounded-sm border-1 border-[#f694fb] p-4 bg-[rgba(246,148,251,.2)] w-full" rows={5} placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" disabled={submitting} className="rounded-sm border-1 border-[#f694fb] p-4 bg-[#f694fb] text-black w-full hover:bg-[rgba(246,148,251,.3)] font-bold disabled:opacity-50">
                    {submitting ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    )
}
