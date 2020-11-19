module.exports = {
    getAll,
    create
   };
   
   const reflections = [
    {text: 'My greatest strength is interpersonal communication'},
    {text: 'My greatest weakness is listening'},
    {text: 'My favorite thing about myself is that I am kind'}
   ];
   
   function getAll() {
    return reflections;
   }

   function create(reflection) {
       reflections.push(reflection);
   }