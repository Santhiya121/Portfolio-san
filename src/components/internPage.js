import React, { useState } from "react";

export default function Intern() {
  const [activeModal, setActiveModal] = useState(null);

  const internships = [
    {
      id: 1,
      title: "Front-end Development Internship",
      company: "Naso Tech, Chennai",
      description:
        "Developed a Spotify clone focusing on dynamic UI and seamless user experience.",
      certificateImage:"/static/Naso.jpg" ,
      fullDetails:
        "Built a Spotify clone using React, emphasizing front-end development. Implemented features such as music search, playlists, and user-friendly interfaces, ensuring responsive and visually appealing design",
    },
    {
      id: 2,
      title: "Web Development Internship",
      company: "Monolith Technology",
      description:
        "Worked on full-stack web development using React, Express, and MongoDB.",
      certificateImage: "/static/Monolith.png",
      fullDetails:
        "During this internship, I developed and maintained web applications using React for the front end, Express.js for the backend, and MongoDB for database management. Contributed to designing RESTful APIs and building scalable, responsive, and interactive user interfaces",
    },
  ];

  return (
    <section id="certificate" className="p-12 bg-pink-500 text-gray-800 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        Internship Details
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white shadow-2xl rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              <img
                src={internship.certificateImage}
                alt={internship.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-6 py-3 text-lg font-semibold">
                {internship.company}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">{internship.title}</h3>
              <p className="text-lg text-gray-600 mt-4">{internship.description}</p>
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setActiveModal({ type: "details", id: internship.id })}
                  className="px-6 py-3 text-base bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                >
                  Show Details
                </button>
                <button
                  onClick={() => setActiveModal({ type: "certificate", id: internship.id })}
                  className="px-6 py-3 text-base bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
                >
                  Show Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Details */}
      {activeModal && activeModal.type === "details" && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-3xl font-bold mb-6">Internship Details</h3>
            <p className="text-lg text-gray-700 mb-6">
              {
                internships.find((internship) => internship.id === activeModal.id)
                  .fullDetails
              }
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Certificate */}
      {activeModal && activeModal.type === "certificate" && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full h-auto">
            <h3 className="text-3xl font-bold mb-6">Internship Certificate</h3>
            <div className="overflow-auto mb-6">
              <img
                src={
                  internships.find((internship) => internship.id === activeModal.id)
                    .certificateImage
                }
                alt="Internship Certificate"
                className="w-full max-h-80 object-contain border rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <a
                href={
                  internships.find((internship) => internship.id === activeModal.id)
                    .certificateImage
                }
                download={`${internships.find(
                  (internship) => internship.id === activeModal.id
                ).title}_Certificate.png`}
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
              >
                Download
              </a>
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
