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

const MusicianContainer = connect( mapStateToProps )(Musician);

export default MusicianContainer;
