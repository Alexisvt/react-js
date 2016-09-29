import * as React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  
  const courseList = courses.map((course) => <CourseListRow key={course.id} course={course}></CourseListRow>);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>{courseList}</tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: React.PropTypes.array.isRequired
};

export default CourseList;