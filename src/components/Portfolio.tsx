
import React from 'react';
import { Smartphone, Globe, Database } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform built with Laravel backend and React frontend. Includes payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Laravel", "React", "MySQL", "Stripe API"],
      category: "Web Application",
      icon: <Globe className="text-blue-400" size={24} />
    },
    {
      title: "Task Management Mobile App",
      description: "Android application for team task management with real-time collaboration features. Built with modern Android development practices.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
      technologies: ["Android", "Kotlin", "Firebase", "SQLite"],
      category: "Mobile Application",
      icon: <Smartphone className="text-green-400" size={24} />
    },
    {
      title: "Enterprise CRM System",
      description: "Customer relationship management system built with .NET Core and Angular. Features include lead tracking, sales pipeline, and reporting dashboard.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop",
      technologies: [".NET Core", "C#", "Angular", "SQL Server", "Azure"],
      category: "Enterprise Software",
      icon: <Database className="text-purple-400" size={24} />
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and video calls. Built using MERN stack with Socket.io integration.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      category: "Web Application",
      icon: <Globe className="text-cyan-400" size={24} />
    },
    {
      title: "Fitness Tracking App",
      description: "Android fitness application with workout tracking, progress monitoring, and social features. Integrates with various fitness APIs.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop",
      technologies: ["Android", "Java", "SQLite", "Google Fit API"],
      category: "Mobile Application",
      icon: <Smartphone className="text-orange-400" size={24} />
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive inventory management solution with barcode scanning, automated reordering, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
      category: "Business Application",
      icon: <Database className="text-red-400" size={24} />
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
