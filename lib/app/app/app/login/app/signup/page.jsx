'use client';
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert("OTP sent to your email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#111] p-10 rounded-2xl w-[350px] border border-[#222]">
        <h1 className="text-2xl font-semibold mb-6">Signup</h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-3 bg-[#222] rounded-lg mb-4 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendOtp}
          className="bg-white text-black w-full py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Send OTP
        </button>

        <a href="/login" className="block text-center mt-6 text-gray-400 hover:text-white">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
}
