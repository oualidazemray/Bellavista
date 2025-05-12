"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { toast } from "react-hot-toast";

const SignupPage: React.FC = () => {
  const handleSubmit = () => {
    toast.success(`    <div className="bg-amber-900/70 backdrop-blur-sm rounded-lg p-8 w-full max-w-md mr-6 md:mr-12">
              <div className="flex flex-col items-center">
                <div className="text-amber-100 text-5xl mb-4">✓</div>
                <h2 className="text-amber-100 font-serif text-2xl text-center mb-6">
                  WELCOME TO PARADISE!
                </h2>
                <div className="flex">
                  <div className="text-amber-100 text-2xl mr-3">✉</div>
                  <p className="text-amber-100">
                    One final step - please verify your email <br />
                    to unlock your Bellavista experience.
                  </p>
                </div>
              </div>
            </div>
       `);
  };

  return (
    <>
      <Head>
        <title>Bellavista - Where Your Vacation Story Begins</title>
        <meta name="description" content="Bellavista resort signup" />
      </Head>

      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/beachBack.jpg"
            alt="Beach sunset with palm umbrella"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Form Container */}
        <div className="absolute flex items-center   bottom-0 right-0 justify-end ">
          <div className="bg-yellow-600 bg-opacity-50 items-end justify-end rounded-xl rounded-b-none px-10  max-w-2xl mr-6 md:mr-12">
            <div className="flex items-center justify-center ">
              <Image
                src="/bellavistaIcon.png"
                alt="Bellavista Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <h2 className="text-brawny font-serif text-xl text-center mb-6">
              Where Your Vacation Story Begins
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-lime mb-1">
                    first name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="ex: azemray"
                    className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-amber-100 mb-1"
                  >
                    last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="ex: oualid"
                    className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-amber-100 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="oualidazemray@email.xyz"
                  className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-amber-100 mb-1">
                  phone numbre
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+212505050505"
                  className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-amber-100 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••••••••"
                    className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="verifyPassword"
                    className="block text-amber-100 mb-1"
                  >
                    Verifie password
                  </label>
                  <input
                    type="password"
                    id="verifyPassword"
                    name="verifyPassword"
                    placeholder="••••••••••••••"
                    className="w-full p-2 rounded bg-amber-900/50 border border-amber-700 text-amber-100 placeholder-amber-300/60"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center pt-2">
                <button
                  type="submit"
                  className="bg-amber-600 text-amber-100 rounded-full px-6 py-1 hover:bg-amber-500"
                >
                  sing-up
                </button>

                {/* OR Divider */}
                <div className="w-full flex items-center justify-center my-4">
                  <div className="h-px bg-amber-700 flex-grow"></div>
                  <div className="px-4 text-amber-100">Or</div>
                  <div className="h-px bg-amber-700 flex-grow"></div>
                </div>

                {/* Social Login Options */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="flex items-center bg-amber-900/50 rounded-md p-2 border border-amber-700 text-amber-100"
                  >
                    <div className="w-5 h-5 mr-1">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#EA4335"
                          d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                        />
                        <path
                          fill="#4A90E2"
                          d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                        />
                      </svg>
                    </div>
                    <span>oogle</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center bg-amber-900/50 rounded-md p-2 border border-amber-700 text-amber-100"
                  >
                    <div className="w-5 h-5 mr-1">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#1877F2"
                          d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                        />
                      </svg>
                    </div>
                    <span>acebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
