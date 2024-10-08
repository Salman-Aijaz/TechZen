"use client";
import React, { useEffect, useState } from "react";
import { TbMessage } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

const servicesProvide = [
  "Frontend Development",
  "Backend Development",
  "Graphic Design",
  "Mobile Development",
];

interface FormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
  
    if (type === "checkbox") {
      const input = e.target as HTMLInputElement;
      const checked = input.checked;
      const newServices = checked
        ? [...formData.services, value]
        : formData.services.filter((service) => service !== value);
  
      setFormData({ ...formData, services: newServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          services: [],
        });
      } else {
        setError("Failed to send the message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-5xl font-bold my-6 text-center">
        Contact Our Team
      </h2>
      <p className="text-gray-600 text-center">
        Have questions or need help with scaling on our platform? We&apos;re here to
        assist.{" "}
      </p>
      <p className="text-gray-600 text-center">
        Chat with our friendly team 24/7 and get onboard in under 5 minutes!
      </p>
      <div
        className="flex justify-evenly items-center lg:flex-row flex-col"
        data-aos="flip-left"
        data-aos-duration="1500"
        data-aos-easing="ease-out"
      >
        <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow-md appearance-none rounded-md w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow-md appearance-none rounded-md w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow-md appearance-none rounded-md w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <p className="block text-gray-600 text-sm font-bold mb-2">
            Services
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            {servicesProvide.map((service, index) => (
              <label key={index} className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleInputChange}
                />
                <span className="text-gray-600">
                  {service}
                </span>
              </label>
            ))}
          </div>

          <div className="flex items-center">
            <button
              className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="flex flex-col max-w-lg w-full lg:w-auto lg:max-w-auto">
          <div className="py-4">
            <h2 className="text-2xl font-bold my-2">
              Chat With Us
            </h2>
            <p className="text-gray-600 ">
              Chat with our team for instant support.
            </p>
            <div className="py-4">
              <div className=" text-gray-600 flex items-center gap-2 my-1">
                <TbMessage className="w-4 h-4" />
                <Link href="https://wa.me/9233333132528" target="_blank" className="hover:underline cursor-pointer">
                  Start a live chat
                </Link>
              </div>
              <div className="text-gray-600 flex items-center gap-2 my-1">
                <SiMinutemailer className="w-4 h-4" />
                <Link href="mailto:salman333699@gmail.com" target="_blank" className="hover:underline cursor-pointer">
                  Shoot us on Email
                </Link>
              </div>
              <div className="text-gray-600 flex items-center gap-2 my-1">
                <BsLinkedin className="w-4 h-4" />
                <Link href="https://www.linkedin.com/in/muhammad-salman-158213287/" target="_blank" className="hover:underline cursor-pointer">
                  Message us on Linkedin
                </Link>
              </div>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold my-2">Call Us</h2>
            <p className="text-gray-600">
              Call our team Mon-Fri from 8am to 6am.
            </p>
            <div className="py-4">
              <div className="text-gray-600 flex items-center gap-2 my-1">
                <IoIosCall className="w-4 h-4" />
                <Link href="tel:+9233333132528" target="_blank" className="hover:underline cursor-pointer">
                  +92 333 3132528
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
