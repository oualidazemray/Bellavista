"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Navbar } from "@/components/home/NavBar";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

const WelcomeToast = () => (
  <div className="flex items-center gap-3 px-4">
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password", {
        style: {
          background: "rgba(0, 0, 0, 0.9)",
          color: "#E3C08D",
          border: "1px solid #E3C08D",
        },
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        toast.error(result.error, {
          style: {
            background: "rgba(0, 0, 0, 0.9)",
            color: "#E3C08D",
            border: "1px solid #E3C08D",
          },
        });
      } else {
        if (formData.rememberMe) {
          localStorage.setItem("rememberedEmail", formData.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

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

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    } catch (error) {
      toast.error("An unexpected error occurred", {
        style: {
          background: "rgba(0, 0, 0, 0.9)",
          color: "#E3C08D",
          border: "1px solid #E3C08D",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute bg-black opacity-50 inset-0 w-full h-full">
          <Image
            src="/beachBack.jpg"
            alt="Beach sunset background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left p-4 md:p-12"
          >
            <h1 className="text-[#E3C08D] text-4xl md:text-5xl font-seasons mb-2">
              BELLAVISTA
            </h1>
            <p className="text-[#E3C08D] text-xl md:text-2xl font-seasons mb-6">
              Where Your Vacation Story Begins
            </p>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex justify-center md:justify-start"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-lg mx-auto"
          >
            <div className="bg-black/90 backdrop-blur-sm rounded-3xl px-6 py-8 md:px-12 w-full border border-[#E3C08D]">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <h1 className="text-[#E3C08D] text-2xl md:text-3xl font-seasons">
                  BELLAVIS{" "}
                </h1>
                <Image
                  src="/palme.png"
                  alt="Palm Icon"
                  width={80}
                  height={80}
                  className="mb-1"
                />
                <span className="text-[#E3C08D] text-2xl md:text-3xl font-seasons">
                  A
                </span>
              </motion.div>

              <h2 className="text-[#E3C08D] text-lg md:text-xl font-seasons text-center mb-8">
                Where Your Vacation Story Begins
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center"
                >
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
                    remember me
                  </label>
                </motion.div>

                <div className="flex flex-col items-center space-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="bg-transparent border border-[#E3C08D] text-[#E3C08D] px-8 py-2 rounded-full hover:bg-[#E3C08D]/10 transition-colors w-32"
                  >
                    {isLoading ? "Logging in..." : "log in"}
                  </motion.button>

                  <div className="w-full flex items-center">
                    <div className="flex-grow h-px bg-[#E3C08D]"></div>
                    <span className="px-4 text-[#E3C08D]">Or</span>
                    <div className="flex-grow h-px bg-[#E3C08D]"></div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="flex items-center justify-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                    >
                      <Image
                        src="/google-icon.png"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#E3C08D]">oogle</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="flex items-center justify-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-md border border-[#E3C08D]"
                    >
                      <Image
                        src="/facebook-icon.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#E3C08D]">acebook</span>
                    </motion.button>
                  </div>
                </div>
              </form>

              <div className="mt-8 text-center text-[#E3C08D]/60 text-xs sm:text-sm">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <Link href="/terms">Terms & Conditions</Link>
                  <Link href="/privacy">Privacy Notice</Link>
                  <Link href="/cookies">Cookie Policy</Link>
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2">
                  <Link href="/media">Recorded Media Policy</Link>
                  <Link href="/accessibility">Accessibility</Link>
                  <Link href="/signup">
                    © Sign Up {new Date().getFullYear()}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
