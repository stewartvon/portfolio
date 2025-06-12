
import React from 'react';
import { Code, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Globe className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Focus</h3>
                  <p className="text-gray-400">Web & Mobile Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur-xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Passionate Full-Stack Developer
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I've developed a passion for creating innovative digital solutions that bridge 
                    the gap between complex backend systems and beautiful user experiences.
                  </p>
                  <p>
                    My expertise spans across multiple technology stacks, from building robust 
                    web applications with <span className="text-blue-400 font-semibold">PHP Laravel</span> and 
                    <span className="text-purple-400 font-semibold"> MERN stack</span>, to developing 
                    enterprise solutions with <span className="text-cyan-400 font-semibold">.NET and C#</span>, 
                    and creating mobile experiences with <span className="text-green-400 font-semibold">Android development</span>.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with 
                    the latest technologies to deliver exceptional results for every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
