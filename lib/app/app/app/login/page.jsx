'use client';
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#111] p-10 rounded-2xl w-[350px] border border-[#222]">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>

        <button
          onClick={loginGoogle}
          className="bg-white text-black w-full py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        <a href="/signup" className="block text-center mt-6 text-gray-400 hover:text-white">
          Create an account
        </a>
      </div>
    </div>
  );
}
