export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold mb-4">SemiCrypto</h1>

      <p className="text-gray-400 mb-8">
        The Social Layer for Crypto Creators
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Login
        </a>

        <a
          href="/signup"
          className="border border-gray-600 px-6 py-3 rounded-xl hover:border-white transition"
        >
          Signup
        </a>
      </div>
    </div>
  );
}
