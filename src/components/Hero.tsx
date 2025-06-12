
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10">
          {/* Professional Photo with 3D Effect */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-2 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                <img 
                  src="/lovable-uploads/66530151-c070-4b9a-9a54-975be0cf2cb8.png"
                  alt="Stewart - Professional Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-600 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Stewart
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in">
            Full-Stack Developer
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
            Specializing in <span className="text-blue-400 font-semibold">PHP (Laravel)</span>, 
            <span className="text-purple-400 font-semibold"> MERN Stack</span>, 
            <span className="text-cyan-400 font-semibold"> .NET/C#</span>, and 
            <span className="text-green-400 font-semibold"> Android Development</span>
          </p>

          {/* 3D Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span className="text-white font-semibold">View My Work</span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border border-gray-500 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
            >
              <span className="text-gray-300 group-hover:text-white font-semibold">Get In Touch</span>
            </a>
          </div>

          {/* Social Links with 3D Effect */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
