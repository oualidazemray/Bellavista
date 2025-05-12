"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Navbar } from "@/components/ui/NavBar";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const WelcomeToast = () => (
  <div className="flex items-center gap-3 px-4 ">
    <div className="text-[#E3C08D] border-2 border-[#E3C08D] rounded-full p-1">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[#E3C08D] font-seasons text-lg">
        Welcome to Paradise!
      </span>
      <Image
        src="/palme.png"
        alt="Palm Icon"
        width={20}
        height={20}
        className="mt-1"
      />
    </div>
  </div>
);

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Add your login logic here
      // If login is successful:
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-black/90 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-[#E3C08D]/10 backdrop-blur-sm`}
          >
            <WelcomeToast />
          </div>
        ),
        {
          duration: 3000,
          position: "bottom-center",
        }
      );

      // Wait for toast to show before redirecting
      setTimeout(() => {
        router.push("/ClientDashboard");
      }, 1000);
    } catch (error) {
      toast.error("Invalid credentials", {
        style: {
          background: "rgba(0, 0, 0, 0.9)",
          color: "#E3C08D",
          border: "1px solid #E3C08D",
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute bg-black opacity-50 inset-0 w-full h-full">
          <Image
            src="/beachBack.jpg"
            alt="Beach sunset background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Left Side Content */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-12">
          <h1 className="text-[#E3C08D] text-5xl font-seasons mb-2">
            BELLAVISTA
          </h1>
          <p className="text-[#E3C08D] text-2xl font-seasons mb-6">
            Where Your Vacation Story Begins
          </p>
          <Link
            href="/signup"
            className="text-[#E3C08D] text-xl font-seasons flex items-center"
          >
            sign in now
            <svg
              className="ml-2 w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Form Container */}
        <div className="absolute right-0  -translate-y-1/2 p-12">
          <div className="bg-black/90 backdrop-blur-sm rounded-3xl px-12 py-8 w-[500px] border border-[#E3C08D]">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-[#E3C08D] text-3xl font-seasons">
                BELLAVIS{" "}
              </h1>
              <Image
                src="/palme.png"
                alt="Palm Icon"
                width={100}
                height={100}
                className="mb-1"
              />
              A
            </div>

            <h2 className="text-[#E3C08D] text-xl font-seasons text-center mb-8">
              Where Your Vacation Story Begins
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="oualidazemray@email.xyz"
                  className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D] placeholder-[#E3C08D]/60"
                />
              </div>

              <div>
                <label className="text-[#E3C08D] text-lg font-seasons mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••••"
                  className="w-full bg-[#1A1A1A] border border-[#E3C08D] rounded-md p-2 text-[#E3C08D]"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2 accent-[#E3C08D]"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-[#E3C08D] font-seasons"
                >
                  remembre me
                </label>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <button
                  type="submit"
                  className="bg-transparent border border-[#E3C08D] text-[#E3C08D] px-8 py-2 rounded-full hover:bg-[#E3C08D]/10 transition-colors w-32"
                >
                  log in
                </button>

                <div className="w-full flex items-center">
                  <div className="flex-grow h-px bg-[#E3C08D]"></div>
                  <span className="px-4 text-[#E3C08D]">Or</span>
                  <div className="flex-grow h-px bg-[#E3C08D]"></div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                  >
                    <Image
                      src="/google-icon.png"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    <span className="text-[#E3C08D]">oogle</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                  >
                    <Image
                      src="/facebook-icon.png"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                    <span className="text-[#E3C08D]">acebook</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Footer Links */}
            <div className="mt-8 text-center text-[#E3C08D]/60 text-sm">
              <div className="flex justify-center space-x-4">
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Notice</Link>
                <Link href="/cookies">Cookie Policy</Link>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="/media">Recorded Media Policy</Link>
                <Link href="/accessibility">Accessibility</Link>
                <Link href="/signup">© Sign Up {new Date().getFullYear()}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
