export default function Home() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-black p-10">
          
          
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-white flex justify-center items-center">Hi, I'm Santhiya</h1>
            <p className="text-xl text-gray-500 flex justify-center items-center">
              As an MCA graduate with a solid foundation in software development, 
              I am eager to apply my skills in building web applications and solving problems. 
              My passion for technology drives me to deliver efficient solutions and grow as a developer.
            </p>
            <p className="text-lg text-gray-700 italic flex justify-center items-center">
              "Technology is best when it brings people together."
            </p>

            
            <div className="flex justify-center items-center">
              <a
                href="/static/santhiya_Ravi.pdf"
                download="Santhiya_Resume"      
                className="w-64 px-6 py-3 text-center text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full transition-all duration-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white"
              >
                Download Resume 
              </a>
            </div>
          </div>
  
          
          <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-transparent transform transition duration-500 hover:border-pink-500 hover:scale-110">
              <img
                src="/static/santhu.jpg"
                alt="Santhiya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </>
    );
}
