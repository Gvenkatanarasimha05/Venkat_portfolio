
import { Code, Palette, Zap, Users, Award } from 'lucide-react';
import meImage from './images/heo.png';
export const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building robust web applications with modern technologies like React, Node.js, and Python.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring fast, efficient applications that scale and perform under pressure.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams to deliver high-quality products.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-bl-full opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Creative Developer with a Passion for Design
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={meImage}
                alt="Portrait of a creative developer" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-700/30 rounded-2xl -z-0"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Bringing Ideas to Life Through Code and Design
            </h3>
            
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p>
                With a strong foundation in Python, Java, C, and Data Structures and Algorithms, I design intelligent, high-performance digital solutions that merge AI innovation with full-stack web development.
              </p>
              <p>
                My expertise spans Machine Learning, web technologies, Networking, DBMS, and Operating Systems. Blending creativity with technical excellence, I am passionate about building scalable, efficient systems that drive real-world impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, experimenting with creative technologies, or sharing my knowledge with the community through workshops and mentoring sessions.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">2+</div>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
              What I Do Best
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Combining technical expertise with creative vision to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {skill.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
