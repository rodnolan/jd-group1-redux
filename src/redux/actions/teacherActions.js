export const UPDATE_TEACHER = 'UPDATE_TEACHER';

export function updateTeacherAction( name, subject, school ) {
  console.log('action creator executed with args: ', name, subject, school );
  return {
    type: UPDATE_TEACHER,
    payload: { name, subject, school }
  }
}
