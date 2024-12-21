"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Spline from "@splinetool/react-spline";
import emailjs from "emailjs-com";
import {
  FaArrowDown,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaQuoteLeft,
} from "react-icons/fa";
import { SiAdobe, SiReact } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [beamPosition, setBeamPosition] = useState<number>(0);

  const timelineData = [
    { date: "2024", title: "Graduated from Conestoga College", description: "Postgraduate diploma in Web Development (3.2 GPA)." },
    { date: "2023-2024", title: "Order Selector - DHL Supply Chain", description: "Optimized workflows using RTCIS and SmartOps." },
    { date: "2018-2022", title: "Customer Service and Business Development", description: "Built responsive websites for Alue Glazers." },
    { date: "Certifications", title: "Certifications & Courses", description: "MongoDB, .NET Core Web API, Angular 12 certifications." },
  ];

  const skillsData = [
    { icon: <FaCode size={40} />, title: "Programming", description: "HTML, CSS3, JavaScript, TypeScript, React, C#, Node.js" },
    { icon: <FaDatabase size={40} />, title: "Databases", description: "MySQL, Firebase, MongoDB" },
    { icon: <FaMobileAlt size={40} />, title: "Mobile Development", description: "Android Development, Flutter" },
    { icon: <FaTools size={40} />, title: "Frameworks & Tools", description: ".NET, MVC, Tailwind CSS, Adobe XD" },
    { icon: <SiReact size={40} />, title: "React Ecosystem", description: "React, React Three Fiber, Spline 3D" },
    { icon: <SiAdobe size={40} />, title: "Creative Design", description: "Adobe Photoshop, SEO, WordPress, WooCommerce" },
  ];

  const testimonials = [
    {
      text: "Ajai is a fantastic developer! His attention to detail and creativity are top-notch.",
      name: "John Doe",
      designation: "Tech Lead",
    },
    {
      text: "Working with Ajai has been a delightful experience. Highly recommend him!",
      name: "Jane Smith",
      designation: "Project Manager",
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Ajai_Kamaraj_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ajai_Kamaraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_najijve",
          "template_3yuxwcf",
          formRef.current,
          "LlFsNOCF5bWVSSVG2"
        )
        .then(
          () => {
            alert("Feedback sent successfully!");
            formRef.current?.reset();
          },
          (error) => {
            console.error("Error sending feedback:", error);
            alert("Failed to send feedback. Please try again later.");
          }
        );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(Math.max((windowHeight / 2 - top) / height, 0), 1);
        setBeamPosition(scrollProgress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Spline scene="https://prod.spline.design/nYn5qbZMfBt6vKwn/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 shadow-2xl"
          >
            <div className="bg-gray-200 rounded-full overflow-hidden w-48 h-48 lg:w-64 lg:h-64">
              <img src="/profile.jpg" alt="Ajai Kamaraj" className="object-cover w-full h-full" />
            </div>
          </motion.div>

          <div className="text-center lg:text-left max-w-2xl">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Ajai Kamaraj
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              A skilled web developer with expertise in responsive applications and immersive user interfaces.
            </motion.p>

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <FaArrowDown />
              Download My Resume
            </motion.button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.icon}
                <h3 className="mt-4 text-xl font-semibold">{skill.title}</h3>
                <p className="mt-2 text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mt-16 relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800">My Journey</h2>
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: "rgba(209, 213, 219, 0.8)", color: "#1f2937" }}
                contentArrowStyle={{ borderRight: "7px solid rgba(209, 213, 219, 0.8)" }}
                date={item.date}
                iconStyle={{ background: "linear-gradient(to right, #3b82f6, #9333ea)", color: "#fff" }}
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">Testimonials</h2>
          <Slider dots infinite autoplay autoplaySpeed={3000} arrows={false}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg mx-4">
                <FaQuoteLeft size={24} className="text-blue-600 mb-4" />
                <p className="text-lg text-gray-800 italic">{testimonial.text}</p>
                <div className="mt-4">
                  <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Feedback Form */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Feedback</h2>
          <form ref={formRef} onSubmit={handleFeedbackSubmit} className="max-w-xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Feedback"
                rows={4}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:ajainavin72@gmail.com" className="text-blue-600 hover:underline text-lg flex items-center gap-2">
              <FaEnvelope size={24} /> ajainavin72@gmail.com
            </a>
            <a href="https://www.facebook.com/focus.shot.10/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg flex items-center gap-2">
              <FaFacebook size={24} /> Facebook
            </a>
            <a href="https://www.instagram.com/aj_.xd/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-lg flex items-center gap-2">
              <FaInstagram size={24} /> @aj_.xd
            </a>
            <a href="https://github.com/ajxd" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline text-lg flex items-center gap-2">
              <FaGithub size={24} /> ajxd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
