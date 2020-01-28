import Musician from './../components/Musician';
import { connect } from 'react-redux';

// this function returns an object with the props that 
// will be passed to the dumb component, Musician
const mapStateToProps = ( reduxState ) => {
  return {
    name: reduxState.name
    // this means that, in Musician, I can display props.name
  }
}

// this function returns an object with the ACTION CREATOR *FUNCTIONS* that 
// will be passed as props to the dumb component, Musician
const mapDispatchToProps = ( dispatch ) => {
  return {
const MusicianContainer = connect( mapStateToProps )(Musician);
  }
}


const MusicianContainer = connect( mapStateToProps, mapDispatchToProps )(Musician);

export default MusicianContainer;
