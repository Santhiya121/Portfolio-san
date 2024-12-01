export default function Projects() {
    const projectList = [
      {
        title: "Food Recipe Website",
        subtitle: "Using HTML, CSS, and JavaScript to create a responsive webpage",
        imageUrl: "/static/project_1.jpeg", 
        codeUrl: "https://santhiya121.github.io/Food-Recipe-Webpage/",
        liveUrl: "https://santhiya121.github.io/Food-Recipe-Webpage/"
      },
      {
        title: "Project 2",
        subtitle: "Using HTML, CSS, and JavaScript to create a responsive webpage",
        imageUrl: "/path/to/project2-image.jpg",
        codeUrl: "https://github.com/your-username/project2",
        liveUrl: "https://project2-live-site.com"
      },
      {
        title: "Project 3",
        subtitle: "Using HTML, CSS, and JavaScript to create a responsive webpage",
        imageUrl: "/path/to/project3-image.jpg",
        codeUrl: "https://github.com/your-username/project3",
        liveUrl: "https://project3-live-site.com"
      },
    ];
  
    return (
      <div className="bg-black min-h-screen py-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-15">My Projects</h2>
  
        <div className="flex flex-wrap justify-center gap-10 p-10 ">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white border-4 border-pink-500 shadow-lg rounded-lg overflow-hidden w-80 transition-transform duration-300 transform hover:scale-105"
            >
              
              <div className="p-4">
                
                <div className="overflow-hidden rounded-lg border-2 border-pink-500">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                
                
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.subtitle}</p>
  
                  
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-black px-4 py-2 rounded border-2 border-pink-500  hover:bg-pink-700  transition-colors duration-200"
                    >
                      View Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-black px-4 py-2 rounded border-2 hover:bg-pink-700 border-pink-500 transition-colors duration-200"
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  