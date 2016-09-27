import * as React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: 'Test'
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const newState = {...this.state};
    newState.course.title = event.target.value;
    this.setState(newState);
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {

    const courses = this.props.courses.map((course, index) => <li key={index}>{course.title}</li>);

    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <ul>
          {courses}
        </ul>
        <input type='text' onChange={this.onTitleChange}
          value={this.state.course.title}
          />
        <input type='submit'
          value='Save'
          onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}
export default connect(mapStateToProps)(CoursesPage);