import React from 'react';

const Musician = ({name, updateMusician}) => {
  return <> 
    <p>{name}</p>
    <button onClick={ 
      () => {
        console.log('about to dispatch a request to update the musician name in response to a button click');
        updateMusician("John Lennon");
      }
    }>update Bob</button>
  </>;
}


export default Musician;
