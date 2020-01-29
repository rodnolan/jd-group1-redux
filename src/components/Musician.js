import React from 'react';

const Musician = ({name, inst, updateMusician}) => {

  let nameInput;
  let instInput;

  return <> 
    <p>{name} plays {inst}</p>

    <form
      onSubmit={e => {
        e.preventDefault()
        if (!nameInput.value.trim() || !instInput.value.trim()) {
          return;
        }
        updateMusician(nameInput.value, instInput.value);
        nameInput.value = '';
        instInput.value = '';
      }}
    >
      <input ref={
        (element) => {
          nameInput = element
        }
      } />
      <input ref={
        (element) => {
          instInput = element
        }
      } />
    <button type="submit">update musician</button>
  </form>
  </>;
}


export default Musician;
