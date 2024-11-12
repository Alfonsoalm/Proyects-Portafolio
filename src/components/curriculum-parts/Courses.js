// src/components/Courses.js
import React, { useState } from 'react';
import { courses } from '../../data/courses';

export const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Calcular los cursos a mostrar en la página actual
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="page">
      <h1 className="heading">Courses</h1>
      <hr />
      <div className="courses-container">
        {currentCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={courses.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      {/* Display course image if available */}
      {course.image && (
        <div className="course-image-container">
          <img
            src={`/images/companies/${course.image}`}
            alt={`${course.institution} logo`}
            className="course-image"
          />
        </div>
      )}
      <h3>{course.name}</h3>
      <p><strong>Institution:</strong> {course.institution}</p>
      <p><strong>Issued:</strong> {course.issued}</p>
      {course.credentialID && (
        <p>
          <strong>Credential ID:</strong>
          <a 
            href={`https://www.udemy.com/certificate/${course.credentialID}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="credential-link"
          > 
            View Credential
          </a>
        </p>
      )}
      {course.skills && course.skills.length > 0 && (
        <div className="skills-section">
          <strong>Skills:</strong>
          <ul className="skills-list">
            {course.skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Componente de Paginación
const Pagination = ({ coursesPerPage, totalCourses, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-button ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
