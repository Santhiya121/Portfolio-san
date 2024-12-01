export default function Education() {
    const educationList = [
      {
        degree: "MCA",
        institution: "Presidency College",
        university: "University of Madras, Chennai",
        year: "2022-2024",
        percentage: "85%",
        description:
          "Gained advanced knowledge in software development, algorithms, data structures, and web technologies. Engaged in multiple projects focused on full-stack development and data analysis."
      },
      {
        degree: "B.Sc Mathematics",
        institution: "Maharani Arts and Science College",
        location: "Dharapuram",
        year: "2019-2022",
        percentage: "80%",
        description:
          "Developed strong analytical and problem-solving skills with a focus on mathematical theories, statistics, and quantitative techniques. This foundation supports logical thinking and coding skills."
      },
      {
        degree: "HSC",
        institution: "SLNM High Secondary School",
        location: "Karadivavi",
        year: "2017-2019",
        percentage: "69%",
        description:
          "Specialized in science and mathematics, which laid the groundwork for pursuing higher studies in mathematics and computer applications."
      },
      {
        degree: "SSLC",
        institution: "Government High School",
        location: "Segampalayam",
        year: "2017",
        percentage: "92%",
        description:
          "Excelled in foundational subjects, demonstrating dedication and strong academic performance, which fostered a passion for further studies in technical fields."
      },
    ];
  
    return (
      <div className="bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Education</h2>
  
        <div className="flex flex-col items-center gap-6">
          {educationList.map((education, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border-l-4 border-pink-500 rounded-lg p-6 w-2/3 transition-transform duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800">{education.degree}</h3>
              <p className="text-gray-700">{education.institution}</p>
              {education.university && <p className="text-gray-600">{education.university}</p>}
              {education.location && <p className="text-gray-600">{education.location}</p>}
              <div className="flex justify-between text-gray-500 mt-2">
                <span>{education.year}</span>
                <span>{education.percentage}</span>
              </div>
              <p className="text-gray-600 mt-4">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  