export default function AboutMe() {
    return (
      <div className="bg-pink-500 min-h-screen flex justify-center items-center">
       
        <div className="flex bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl min-h-[500px]">
          
        
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-64 h-full overflow-hidden rounded-lg border-2 transform transition-transform duration-500 hover:scale-105">
              <img src="/static/about.jpeg" alt="Santhiya" className="w-full h-full object-cover" />
            </div>
          </div>
  
       
          <div className="w-2/3">
            <h1 className="text-2xl font-semibold text-pink-500 mb-4">About Me</h1>
            <p className="text-sm text-gray-800 mb-6">
            Hi, I'm Santhiya, an MCA graduate passionate about software development. I specialize in web technologies and love building efficient, scalable solutions.

I have experience in both front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Express, Django) development, and I’m always learning new skills to stay updated with the latest tech trends.

I'm eager to contribute to innovative projects and collaborate with others to create meaningful solutions. Let's connect!
            </p>
  
           
            <div className="flex space-x-8 text-xs">
              
              <div className="w-1/2 space-y-4">
                <SkillBar skill="HTML, CSS" percentage="100" />
                <SkillBar skill="JavaScript" percentage="90" />
                <SkillBar skill="React.js" percentage="80" />
                <SkillBar skill="Node.js" percentage="70" />
                <SkillBar skill="Express.js" percentage="70" />
              </div>
  
              
              <div className="w-1/2 space-y-4">
                <SkillBar skill="Next.js" percentage="50" />
                <SkillBar skill="Python" percentage="90" />
                <SkillBar skill="Django" percentage="60" />
                <SkillBar skill="SQL" percentage="70" />
                <SkillBar skill="MongoDB" percentage="60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  const SkillBar = ({ skill, percentage }) => {
    return (
      <div className="group">
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-800 group-hover:text-pink-500">{skill}</span>
          <span className="text-xs text-gray-800 group-hover:text-pink-500">{percentage}%</span>
        </div>
  
        
        <div className="h-2 bg-gray-300 rounded-full">
          <div 
            className="h-full bg-pink-500 rounded-full transition-all duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-pink-400"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  