
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Laravel", level: 88, color: "from-red-400 to-red-600" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: ".NET", level: 82, color: "from-purple-400 to-purple-600" },
        { name: "C#", level: 80, color: "from-indigo-400 to-indigo-600" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 88, color: "from-cyan-400 to-cyan-600" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "HTML/CSS", level: 92, color: "from-orange-400 to-orange-600" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
        { name: "MySQL", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 82, color: "from-indigo-400 to-indigo-600" },
        { name: "Git", level: 90, color: "from-gray-400 to-gray-600" },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Android", level: 82, color: "from-green-400 to-green-600" },
        { name: "React Native", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "Java", level: 78, color: "from-orange-400 to-orange-600" },
        { name: "Kotlin", level: 75, color: "from-purple-400 to-purple-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform hover:scale-x-105 origin-left`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3D Tech Stack Visualization */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["PHP", "Laravel", "React", "Node.js", ".NET", "C#", "Android", "MongoDB"].map((tech, index) => (
              <div
                key={tech}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-lg px-6 py-4 border border-white/20 transform hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-lg">
                  <span className="text-white font-semibold text-lg">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
