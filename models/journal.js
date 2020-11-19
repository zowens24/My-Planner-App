module.exports = {
    getAll,
    create
   };
   
   const journals = [
    {text: 'Today sucked!', date: '2020-11-8'},
    {text: 'I took my first acting class!', date: '2020-10-7'}
   ];
   
   function getAll() {
    return journals;
   }

   function create(journal) {
       journals.push(journal);
   }