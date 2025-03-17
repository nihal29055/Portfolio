import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={{
        backgroundImage: "url('../src/components/BG.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"></div> {/* Overlay for better readability */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          MERN Stack Developer <br />& Tech Educator
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Building innovative web solutions and empowering the next generation of developers through comprehensive tech education.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
