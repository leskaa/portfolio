import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener(
  'DOMContentLoaded',
  function() {
    const typewriter = new Typewriter('#typewriter', { loop: true });
    typewriter
      .changeDeleteSpeed(50)
      .typeString("I'm a Software Engineer.")
      .pauseFor(2000)
      .deleteChars(18)
      .pauseFor(500)
      .typeString('Student.')
      .pauseFor(2000)
      .deleteChars(8)
      .pauseFor(500)
      .typeString('Web Developer.')
      .pauseFor(2000)
      .deleteChars(14)
      .pauseFor(500)
      .typeString('UI / UX Designer.')
      .pauseFor(2000)
      .deleteChars(17)
      .pauseFor(500)
      .typeString('Front End Developer.')
      .pauseFor(2000)
      .deleteChars(20)
      .pauseFor(500)
      .typeString('Guitarist.')
      .pauseFor(2000)
      .deleteChars(10)
      .pauseFor(500)
      .typeString('Java Developer.')
      .pauseFor(2000)
      .deleteChars(15)
      .pauseFor(500)
      .typeString('Python Programmer.')
      .pauseFor(2000)
      .deleteChars(18)
      .pauseFor(500)
      .typeString('Javascript Developer.')
      .pauseFor(2000)
      .deleteAll(35)
      .pauseFor(500)
      .start();
  },
  false
);
