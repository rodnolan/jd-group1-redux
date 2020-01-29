import { UPDATE_MUSICIAN } from './../actions/musicianActions';

const defaultState = {
  name: 'Bob Dylan',
  inst: 'harmonica'
}

export default function musicianReducer(state = defaultState, action) {

  if (action !== undefined && action.payload !== undefined) {
    console.log('musicianReducer just received an action');
    // console.log(action.type);
    console.log(action.payload);
  }

  switch (action.type) {
    case UPDATE_MUSICIAN :
      const newMusician = {
        ...state, 
        ...action.payload
      };
      console.log(newMusician);
      return newMusician;

    default: 
      return {...state};
  }

}
