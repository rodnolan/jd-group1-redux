export const UPDATE_MUSICIAN = 'UPDATE_MUSICIAN';

export function updateMusicianAction( musicianName ) {
  return {
    type: UPDATE_MUSICIAN,
    payload: { name: musicianName }
  }
}
