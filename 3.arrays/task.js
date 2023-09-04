function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index])) 
    {
        return comparat=true;
    }
        return comparat=false;
        return(comparat);
} 
function getUsersNamesInAgeRange(users, gender) {
    /*
    let resualt = people.filter((pip,users)=>pip.gender===gend).map(result=>result.age).reduce((summ,userAge,index,arr)=>{
            summ += userAge;
            if (index === arr.length - 1) {
                return summ / arr.length;
              }
            },0);*/
            let resualt;
           let gen = users.filter((users)=>users.gender===gender);
           console.log(gen);
            if (gen.length === 0) {
             return 0;
            }   
           let rez = gen.reduce((acc,item)=>acc=acc+item.age,0);
            return resualt=rez/gen.length;
}
const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]
