export const UPDATE_MUSICIAN = 'UPDATE_MUSICIAN';

export function updateMusicianAction( musicianName, instrument ) {
  console.log('action creator executed');
  return {
    type: UPDATE_MUSICIAN,
    payload: { name: musicianName, inst: instrument }
  }
}
