"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Something went wrong.");
        return;
      }

      setStatus("Message sent! Thank you for reaching out.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText("parineetsond16@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  }

  return (
    <section
      id="contact"
      className="w-full bg-white px-6 py-24 md:px-12 lg:px-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-green-700">
            final note
          </p>

          <h1 className="mt-4 font-handwriting text-[5rem] leading-[0.8] text-neutral-900 md:text-[8rem] lg:text-[10rem]">
            Contact
            <br />
            Me
          </h1>

          <p className="mt-8 max-w-md font-mono text-sm leading-relaxed text-neutral-700 md:text-base">
            Let’s build something useful, pretty, and maybe a little dramatic.
            Whether it’s a project, opportunity, question, or just a hello, I’d
            love to hear from you.
          </p>

          <p className="mt-8 font-handwriting text-3xl text-[#77001E]">
            thanks for stopping by ♡
          </p>
        </div>

        {/* RIGHT SIDE POSTCARD */}
        <div className="rounded-[2rem] border border-red-100 bg-[#fffaf7] p-6 shadow-2xl md:p-8">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-700">
              currently based in
            </p>
            <p className="mt-2 font-mono text-lg text-neutral-900">
              Chicago, Illinois
            </p>
          </div>

          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-700">
              email
            </p>

            <a
              href="mailto:parineetsond16@gmail.com"
              className="mt-2 block break-all font-mono text-sm text-neutral-900 underline md:text-base"
            >
              parineetsond16@gmail.com
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-4 rounded-full border border-[#77001E] px-5 py-2 font-mono text-sm text-[#77001E] transition hover:bg-[#77001E] hover:text-white active:scale-95"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* EMAIL FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-[0.2em] text-green-700"
              >
                your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-red-100 bg-white px-4 py-3 font-mono text-sm outline-none transition focus:border-[#77001E]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-[0.2em] text-green-700"
              >
                your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-red-100 bg-white px-4 py-3 font-mono text-sm outline-none transition focus:border-[#77001E]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-[0.2em] text-green-700"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-red-100 bg-white px-4 py-3 font-mono text-sm outline-none transition focus:border-[#77001E]"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-[#77001E] px-6 py-3 font-mono text-sm text-white transition hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="font-mono text-sm text-[#77001E]">{status}</p>
            )}
          </form>

          {/* SOCIAL BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/parineetsond/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#77001E] px-6 py-3 text-center font-mono text-sm text-white transition hover:opacity-90 active:scale-95"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/psond16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#77001E] px-6 py-3 text-center font-mono text-sm text-white transition hover:opacity-90 active:scale-95"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}