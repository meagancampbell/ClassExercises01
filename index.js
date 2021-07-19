// Define your Book class here:
class Book {
  constructor(title, author, copyright, isbn, pageCount, timesCheckedOut, discarded){
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
  checkedOut(){
      if (this.timesCheckedOut > 100  ){
        this.discarded = 'Yes';
      }
  }
};

  // Define your Manual and Novel classes here:
  class Manual extends Book{
  constructor (title, author, copyright, isbn, pageCount, timesCheckedOut, discarded) {
    super (title, author, copyright, isbn, pageCount, timesCheckedOut, discarded)
  }
}
  class Novel extends Book{
  constructor (title, author, copyright,isbn, pageCount, timesCheckedOut, discarded){
  super (title, author, copyright, isbn, pageCount, timesCheckedOut, discarded)
  }
};
// Declare the objects for exercises 2 and 3 here:
let topSecretShuttle = new Manual (
  'Top Secret Shuttle Building Manual', 'Redacted', 2013,0000000000000, 1147, 1, 'No')

let prideandPrejudice = new Novel (
  'Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No')

// Code exercises 4 & 5 here:

console.log(topSecretShuttle);
console.log(prideandPrejudice);
console.log(topSecretShuttle.timesCheckedOut);
console.log(prideandPrejudice.timesCheckedOut);