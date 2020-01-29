import Teacher from './../components/Teacher';
import { connect } from 'react-redux';
import { updateTeacherAction } from './../redux/actions/teacherActions';

// this function returns an object with the props that 
// will be passed to the dumb component, Musician
const mapStateToProps = ( reduxState ) => {
  return {
    name: reduxState.name,
    subject: reduxState.subject,
    school: reduxState.school
    // this means that, in Musician, I can display props.name, props.subject and props.school
  }
}

// this function returns an object with the ACTION CREATOR *FUNCTIONS* that 
// will be passed as props to the dumb component, Musician
const mapDispatchToProps = ( dispatch ) => {
  return {
    updateTeacher: (teacherName, subject, school) => {
      dispatch(updateTeacherAction(teacherName, subject, school))
    }
  }
}

const TeacherContainer = connect( mapStateToProps, mapDispatchToProps )(Teacher);

export default TeacherContainer;
