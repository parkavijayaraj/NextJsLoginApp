import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { comparePassword, generateToken } from "@/lib/auth";

export async function POST(req) {
  try {
    console.log("Login API called");
    await connectDB();
    console.log("DB connected");

    const body = await req.json();
    console.log("Request body:", body);

    const { email, password } = body;
    if (!email || !password)
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });

    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

    const isPasswordCorrect = await comparePassword(password, user.password);
    console.log("Password correct:", isPasswordCorrect);

    if (!isPasswordCorrect) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

    const token = generateToken({ id: user._id });
    console.log("Token generated:", token);

    return NextResponse.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login API error:", err);
    return NextResponse.json({ message: "Server error", error: err.message }, { status: 500 });
  }
}