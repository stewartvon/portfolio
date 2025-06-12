
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions HK",
      location: "Hong Kong",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using Laravel, React, and .NET. Mentoring junior developers and architecting scalable solutions.",
      technologies: ["Laravel", "React", "TypeScript", ".NET Core", "PostgreSQL", "Docker"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Delivered 3 major projects on time"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Hong Kong",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using MERN stack and PHP. Built responsive mobile applications for Android platform.",
      technologies: ["MERN Stack", "PHP", "Android", "MySQL", "AWS"],
      achievements: [
        "Developed 10+ web applications",
        "Created mobile app with 50k+ downloads",
        "Reduced server costs by 30%"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Studio HK",
      location: "Hong Kong",
      period: "2019 - 2020",
      description: "Worked on various projects using different technologies. Gained experience in both frontend and backend development.",
      technologies: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "jQuery"],
      achievements: [
        "Completed 20+ client projects",
        "Learned multiple tech stacks",
        "Contributed to open source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform md:-translate-x-1/2 border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                        <div className="flex items-center gap-1">
                          <ExternalLink size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
