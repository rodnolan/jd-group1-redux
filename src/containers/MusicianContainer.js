import Musician from './../components/Musician';
import { connect } from 'react-redux';
import { updateMusicianAction } from './../redux/actions/musicianActions';

// this function returns an object with the props that 
// will be passed to the dumb component, Musician
const mapStateToProps = ( reduxState ) => {
  return {
    name: reduxState.musicianData.name,
    inst: reduxState.musicianData.inst
    // this means that, in Musician, I can display props.name
  }
}

// this function returns an object with the ACTION CREATOR *FUNCTIONS* that 
// will be passed as props to the dumb component, Musician
const mapDispatchToProps = ( dispatch ) => {
  return {
    updateMusician: (musicianName, inst) => {
      console.log('about to dispatch an action creator function from the container');
      dispatch(updateMusicianAction(musicianName, inst))
    }
  }
}


const MusicianContainer = connect( mapStateToProps, mapDispatchToProps )(Musician);

export default MusicianContainer;
