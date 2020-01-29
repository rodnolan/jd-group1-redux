import { UPDATE_TEACHER } from './../actions/teacherActions';
const defaultState = {
  name: 'Mr. Duff',
  subject: 'History',
  school: "Sleepy Time High School"
};

export default function teacherReducer (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_TEACHER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {...state};
  }
}

