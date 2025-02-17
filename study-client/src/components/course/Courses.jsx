import { useState } from "react";

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn React from scratch with hands-on projects.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master JavaScript concepts and best practices.",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Build modern full-stack applications using MERN stack.",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785223-485f800ce410?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Courses = () => {
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const handleEnroll = (course) => {
    setEnrolledCourse(course);
  };

  const closePopup = () => {
    setEnrolledCourse(null);
  };

  return (
    <div className="mt-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 border-2"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-700 font-semibold">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <button
                onClick={() => handleEnroll(course)}
                className="mt-3 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enrollment Success Popup */}
      {enrolledCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-teal-600">
              Enrollment Successful!
            </h3>
            <p className="text-gray-600 mt-2">
              You have successfully enrolled in{" "}
              <span className="font-semibold">{enrolledCourse.title}</span>.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
