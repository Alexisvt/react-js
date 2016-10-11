// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { browserHistory } from 'react-router';
import * as toastr from 'toastr';

type ManageCoursePageStateTypes = {
  errors: Object;
  course: Object;
  saving: boolean;
};

class ManageCoursePage extends React.Component {

  // defining types
  state: ManageCoursePageStateTypes;
  updateCourseState: (event: Object) => void;
  saveCourse: (event: Object) => Promise<void>;
  redirect: () => void;

  constructor(props, context: any) {
    super(props, context);
    this.state = {
      course: {...props.course },
      errors: {},
      saving: false
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
        course={this.state.course}
        saving={this.state.saving}
        />
    );
  }

  redirect() {
    browserHistory.push('/courses');
    // this.context.router.push('/courses');
    toastr.success('Course saved');
  }

  async saveCourse(event): Promise<void> {
    event.preventDefault();
    this.setState({ saving: true });
    await this.props.actions.saveCourse(this.state.course);
    this.setState({ saving: false });
    this.redirect();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing  course is loaded directly
      this.setState({ course: {...nextProps.course}});
}
  }

updateCourseState(event) {
  const field = event.target.name;
  const course = this.state.course;
  course[field] = event.target.value;
  return this.setState({ course: course });
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