
import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Hong Kong",
      period: "2015 - 2019",
      grade: "First Class Honours",
      description: "Specialized in Software Engineering and Web Development. Completed thesis on modern web architectures and scalable systems.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Mobile App Development",
        "System Design"
      ]
    },
    {
      degree: "Higher Diploma in Information Technology",
      institution: "Hong Kong Institute of Technology",
      period: "2013 - 2015",
      grade: "Distinction",
      description: "Foundation in programming, database design, and system analysis. Strong emphasis on practical programming skills.",
      courses: [
        "Programming Fundamentals",
        "Object-Oriented Programming",
        "Database Design",
        "Network Administration",
        "System Analysis"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Microsoft Certified: Azure Developer",
      issuer: "Microsoft",
      year: "2022"
    },
    {
      name: "Laravel Certified Developer",
      issuer: "Laravel",
      year: "2021"
    },
    {
      name: "Google Android Developer",
      issuer: "Google",
      year: "2020"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 mb-2">
                      <span className="font-semibold text-blue-300">{edu.institution}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <Award size={16} />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <BookOpen size={16} />
                      Key Courses:
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="text-gray-300 text-sm bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-purple-400" />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400 mb-1">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-green-400">
                        <Calendar size={16} />
                        <span className="font-semibold">{cert.year}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Continuous Learning</h4>
              <p className="text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                I regularly participate in online courses, workshops, and tech conferences to enhance 
                my skills and knowledge in emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
