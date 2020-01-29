import React from 'react';

const Teacher = ({name, subject, school, updateTeacher}) => {

  let nameInput;
  let subjectInput;
  let schoolInput;

  return <> 
    <p>{name} teaches {subject} at {school}</p>

    <form
      onSubmit={e => {
        e.preventDefault()
        if (!nameInput.value.trim() || !subjectInput.value.trim() || !schoolInput.value.trim()) {
          return;
        }
        updateTeacher(nameInput.value, subjectInput.value, schoolInput.value);
        nameInput.value = '';
        subjectInput.value = '';
        schoolInput.value = '';
      }}
    >
      <input ref={
        (element) => {
          nameInput = element
        }
      } />
      <input ref={
        (element) => {
          subjectInput = element
        }
      } />
      <input ref={
        (element) => {
          schoolInput = element
        }
      } />
    <button type="submit">update teacher</button>
  </form>
  </>;
}


export default Teacher;
