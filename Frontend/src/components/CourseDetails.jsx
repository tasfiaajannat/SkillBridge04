import React from 'react';
import { useParams } from 'react-router-dom';
import list from './list.json'; // Assuming list.json is in the same directory

const CourseDetails = () => {
  const { id } = useParams();
  const course = list.find(c => c.id === parseInt(id));

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <p>{course.title}</p>
      <div className="topics">
        {course.details.map((detail, index) => (
          <div key={index} className="topic">
            <h2>{detail.topic}</h2>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
