import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {...props.course },
      errors: {}
    };
  }

  static propTypes = {
    course: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object
  }

  render() {
    return (
      <CourseForm
        allAuthors={[]}
        errors={this.state.errors}
        course={this.state.course} ></CourseForm>);
  }
}

function mapStateToProps(state, ownProps) {
  const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  return {
    course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);