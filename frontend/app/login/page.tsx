"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { identifier, password }
      );
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      router.push("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "UnSuccessfull Login");
      } else {
        setError("An Error Occured");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#f5f5f5] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl bg-white">
        {/* Left promo panel */}
        <div className="relative hidden lg:flex flex-col justify-between bg-[#1b1ff0] text-white p-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="relative z-10">
            <div className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center font-bold text-blue-900 text-lg">
              b
            </div>
          </div>

          <div className="relative z-10 max-w-xs mt-4">
            <h1 className="text-xl font-semibold mb-2">Sign in with ease</h1>
            <p className="text-blue-100 text-sm leading-relaxed">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* card stack area */}
          <div className="relative z-10 flex-1 mt-10">
            {/* back card */}
            <div className="absolute left-0 top-10 w-40 h-56 rounded-2xl bg-white/90 shadow-xl p-3">
              <div className="h-24 rounded-lg bg-gray-200 mb-3" />
              <span className="absolute top-2 left-2 text-[10px] bg-black/70 text-white px-2 py-0.5 rounded-full">
                17 Lessons
              </span>
              <p className="text-xs font-semibold text-gray-900 mt-10">Build Digit...</p>
              <p className="text-[10px] text-gray-500">by purepearl studio</p>
              <p className="text-blue-600 text-xs font-bold mt-1">$25 <span className="text-gray-400 font-normal">lifetime</span></p>
            </div>

            {/* lime ring */}
            <div className="absolute left-6 -top-2 w-10 h-10 rounded-full border-[6px] border-lime-400" />

            {/* front card */}
            <div className="absolute left-24 top-0 w-52 rounded-2xl bg-white shadow-2xl p-3 z-10">
              <div className="h-24 rounded-lg bg-black mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/40 to-transparent" />
              </div>
              <p className="text-sm font-semibold text-gray-900">the Power of Big Data</p>
              <p className="text-[10px] text-blue-600">by purepearl studio</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">Beginner</span>
                <span className="text-xs font-medium">4.5 ★</span>
              </div>
            </div>

            {/* lime triangle */}
            <div
              className="absolute left-2 top-44 w-0 h-0"
              style={{
                borderLeft: "40px solid transparent",
                borderRight: "40px solid transparent",
                borderBottom: "70px solid #a3e635",
              }}
            />

            {/* happy students badge */}
            <div className="absolute left-32 top-48 w-56 rounded-2xl bg-lime-400 text-blue-900 p-3 shadow-xl">
              <p className="text-xs font-semibold">Happy Students</p>
              <p className="text-[10px]">4.5 ★ 2.4k</p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-center justify-center p-8 sm:p-14">
          <div className="w-full max-w-sm">
            <p className="text-blue-600 text-sm font-medium mb-1">Sign In</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email"
                placeholder="designer@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-lime-400 text-blue-900 hover:bg-lime-300 rounded-full px-6"
                >
                  {loading ? "..." : "Sign In"}
                </Button>
              </div>
            </form>

            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-50 font-semibold"
                aria-label="Sign in with Facebook"
              >
                f
              </button>
              <button
                type="button"
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-50 font-semibold"
                aria-label="Sign in with Google"
              >
                G
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              New user?{" "}
              <Link href="/register" className="text-blue-600 font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}