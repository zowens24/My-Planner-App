module.exports = {
    getAll
   };
   
   const goals = [
    {text: 'I want to be an actor', done: false},
    {text: 'I want to live in Spain for a few years', done: false},
    {text: 'I want to fall in love', done: false}
   ];
   
   function getAll() {
    return goals;
   }