let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Unión entre el ecofemisnismo, ciencia y tecnología')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
