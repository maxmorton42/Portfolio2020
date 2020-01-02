import React from 'react';

const Projects = () => {
  return (
    <>
    <h1>Projects</h1>
      <hr />
      <h2>FaceBook App</h2>
      <p>React application with Rails Backend, utilizes Devise Authorization with a working token system </p>
        <a href="https://friend--book.herokuapp.com/"> FaceBook - Hosted with Heroku </a>
        <br /> <br />
      <h2>JavaScript FlashCards</h2>
      <p>Basic flashcard app which allows you to add or remove new flashcards, 
        since it only uses JS the data does not persist </p>
        <a href="https://fervent-blackwell-384c02.netlify.com"> FlashCard App -Hosted with Netlify </a>
    </>
  )
}

export default Projects