//creaating variables in js in 3 ways
//first way
var name = 'Millen';
atlert(name);
//second way conditional variable
let name = 'Earl'

//third way to declare a vatriable that doest change
const name ='Zeus'

//next creating template strings
let fname = 'Earl';
let lname = 'Zeus';
let age = promt("Gues Earl's age ...")

let result = ~${fname} ${lname} is ${age} years old.~;
atlert(result);

//next default parameters
function welcome(user="mystery person", message="Goodday"){
alert(~Hello ${user}, ${message} ~)

}
welcome();

//arrow function
// to write arrow functions that have just one arguement and one statement,we do not need not necessarily need the return funtion
//eg
let greeting = message => alert(~${message}everyone~);
greeting('Good day everyone')
//for multiple arguements and statements, we have
let creatBlog = (title,body) => {
  if (!title){
    throw new Error('a title is required');
    } 
  if (!body){
    throw new Error('a body is needed');
  }
   return alert(~${title} - ${body} ~);
}
creatBlog('blog title' ,'blog body')

//creating hybrid arrrow functions
let









