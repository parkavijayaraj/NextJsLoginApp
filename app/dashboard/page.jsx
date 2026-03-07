"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

export default function DashboardPage() {

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome to Dashboard, User ID: </h2>
      <p>You are logged in!</p>
      <button  style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Logout
      </button>
    </div>
  );
}


