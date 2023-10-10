class PrintEditionItem{

    constructor(name,releaseDate,pagesCount,state,type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state=this.state*1.5;
    }
    set state(newstate){

        if(newstate<0){
            return this._state=0;
        }
        if(newstate>=100){
            return this._state=100;
        }
        return this._state=newstate;
    }

    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem{

    constructor(name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{

    constructor(author,name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state);
        this.author=author;
        this.type = "book";
    }
}
class NovelBook extends Book{
        constructor(author,name,releaseDate,pagesCount,state,type){
        super(author,name,releaseDate,pagesCount,state,type);
        this.type = "novel";
        }
}
class FantasticBook  extends Book{
    constructor(author,name,releaseDate,pagesCount,state,type){
    super(author,name,releaseDate,pagesCount,state,type);
    this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state,type){
    super(author,name,releaseDate,pagesCount,state,type);
    this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name=name;
        this.books=[];
    }
    addBook(book){
        if(book.state>30){
            this.books.push(book);
        }else{
            return;
        }
    }
findBookBy(type, value) {
 const findResult = this.books.find((item) => item[type] === value);
 return findResult || null;
}

giveBookByName(bookName) {
  const book = this.findBookBy("name", bookName);
  if (!book) return null;
  this.books = this.books.filter((item) => item.name !== bookName);
  return book;
}
}
class Student{
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
}
    setSubject(subjectName){
    return this.subject=subjectName;
}
    addMarks(...marks){
    if(this.marks!==undefined){
        this.marks.push(...marks);
    }
}
    getAverage(){
    if(this.marks===undefined || this.marks.length===0){
        return 0;
    }else{
        let summ=0;
        for(let i=0;i<this.marks.length;i++){
            summ=summ+this.marks[i];
        }
        let leng = this.marks.length;
        return summ/leng;
    }
}
    exclude(reason){
        delete this.subject;
        delete this.marks;
        this.excluded=reason;
}
    }
