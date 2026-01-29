"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SignupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Signup failed.");
      }

      setStatus("success");
      setMessage(result?.message || "Thanks for joining.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="email"
        name="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        disabled={status === "loading"}
      />
      <button className="button primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join the list"}
      </button>
      {message ? <p className="small">{message}</p> : null}
    </form>
  );
}
