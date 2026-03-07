"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Login Page</h2>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => router.push("/signup")}
          style={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
        >
          Signup
        </button>
        <button
          onClick={() => router.push("/login")}
          style={{ padding: "0.5rem 1rem" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}