module.exports = {
    getAll
   };
   
   const journals = [
    {text: 'Today sucked!', date: 'October 21, 2019'},
    {text: 'I took my first acting class!', date: 'October 30, 2019'}
   ];
   
   function getAll() {
    return journals;
   }