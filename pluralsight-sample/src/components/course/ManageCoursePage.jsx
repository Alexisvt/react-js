import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { browserHistory } from 'react-router';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {...props.course },
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  static propTypes = {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    errors: React.PropTypes.object,
    actions: React.PropTypes.object
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  render() {
    return (
      <CourseForm
        onChange={this.updateCourseState}
        allAuthors={this.props.authors}
        onSave={this.saveCourse}
        errors={this.state.errors}
        course={this.state.course} ></CourseForm>
        );
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    // this.context.router.push('/courses');
    browserHistory.push('/courses');
  }

  updateCourseState(event) {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
}

function getCourseById(courses, courseId) {
  const course = courses.find(course => course.id === courseId);
  return course ? course : null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path `/course/:id`
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId); 
  }
  const authorsFormattedForDropdown = state.authors.map(author => ({
    value: author.id,
    text: `${author.firstName} ${author.lastName}`
  }));

  return {
    course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);