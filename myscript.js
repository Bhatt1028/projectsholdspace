/*
NOTES
Comparison operators are symbols/math that let us compare 2 or more values to a variable

= symbol is an assignment operator, we use it to assign a value to a variable
ex. var x = 5; sets x equal to a value of 5

== is a comparison operator, we use it to compare two values for equality
ex. x == y; will return true or false depending on whether x and y hold equal values

if (x === y) {...} Strict equal, meaning that both the value and data type of x and y must be the same

if (X == Y) {...} loose equal. values must be the same, but data type does not. javascript will attempt to convert the data type, but don't rely on it if possible

if (x !== y) {...}  loose not-equal. this will return true if value is not equal or if data type is not equal

if (x != y) {...} values are not equal (data type is ignored)

x < y x is less than y
x <= y x is less or equal to y
x > y x is greater than y
x >= y x is greater or equal to y

 */

function wordMatch()
{
  var str1 = "apple";
  var str2 = "Apple";
//logic gate -- aka Conditional statement,.. BOOLEAN statement b.c. result is always y/n\\
    if (str1 == str2) // if two strings are equal
    {
        return "The two strings are equal."
    }
    else
    {
        return "Those strings are different!"
    }

 // return str1 == str2;
}

function strictEqual()
{
    var x = 7; //data type is numeric
    var y = "7"; //data type is string
    if (x === y)
    {
        return "x and y have the same value and data type";
    }
    if (x == y)
    {
       return "x and y have the same value";
    }

}

/*
Mini project 1
 task; write a function named 'greaternum' that does the following
 () takes two arguments (parameters), both of which are numbers (datatype?)
 () return whichever number is the greater (higher value) number
 () call that function 2 times with different numbers pairs, and log the output to make sure it works

 Gameplan
 Html:
 (*) add 2 input boxes for numbers
 (*) button to call function
 (*) text box w/ output

 Javascript:
 (*) create the function 'greaternum' that uses if-then to compare numbers

 */

function greaternum()
{
  var num1 = Number( document.project1.input1.value);
  var num2 = Number( document.project1.input2.value);

  if (num1 > num2)
  {
      return "The greater number of " + num1 + " and " + num2 + " is " + num1;
  }
  else if (num2 > num1)
  {
      return "The greater number of " + num1 + " and " + num2 + " is " + num2;
  }
  else if (num1 == num2)
  {
      return "they are equal";
  }
}

/*
Mini project 2
task= write a function named 'helloWorld' that=
-takes 1 argument, language code (example 'en', 'es', 'de',..)
- returns "hello, world" for the language code given.
- It should default to returning english "hello world"
- call the function for each of the supported languages and log the result
to make sure it works

HTML
(*) input box for the language code
(*) box for the output hello world
(*) Form on the html document
(*) button to call the function

Javascript
(*) function 'helloWorld'
(*) if-else statement with language codes
(*) pull language code from the html and use it in helloWorld

 */

function helloWorld()
{
 var language = document.project2.input1.value; //capture data from input
    language = language.toLowerCase();
 //here comes the logic
 if (language == 'kr')
 {
     return "안녕 세상";
 }
 else if(language == 'ru')
 {
     return "Privet Mir";
 }
 else if (language == 'de')
 {
     return "Hallo Welt";
 }
 else if (language == 'pl')
 {
     return "Witaj świecie";
 }
 else if (language == 'en')
 {
     return "Hello world";
 }
 else
    {
        return "Hello world";
    }
}

// PEBCAK
// problem exists between chair and keyboard

/*
Mini project 3
task= write a function named 'assignGrade' that
- takes 1 argument, a numeric score (80, 98, 72, etc.)
- return a grade for the score. (A, B, C, D, F+)
- call that function for a few different scores and log the result.

HTML
()
()
()
Java
()
()
 */

function assignGrade()
{
var num1 = Number(document.project3.input1.value);

if (num1 > 9000)
{
    return "Impossible... It's over 9000!";
}
else if (num1 >= 95)
{
    return "Wow! A+";
}
else if (num1 >= 90)
{
    return "Nice. an A.";
}
else if (num1 >= 80)
{
    return "B. Great.";
}
else if  (num1 >= 70)
{
    return "Cs get degrees!";
}
else if (num1 >= 60)
{
    return "Ds get diplomas!";
}
else if (num1 > 0)
{
    return "F. Nice job, ya genius.";
}

}

/* Mini Project 4
Write a function named 'pluralize' that:
- take 2 arguments, a noun and a number
- return the number and pluralized form of the noun
EX input: number=3 noun=dog
EX output: "3 dogs"
- test a few different nouns (will not be perfect)
- allow for a few special cases like mouse, goose, cacti
 */

function pluralize()
{
var quantity = Number(document.project4.num1.value);   //get quantity
    var noun = document.project4.word1.value.toLowerCase();

   if (noun == 'mouse') // special if-else for case of mouse
   {
       if(quantity > 1)
       {
           return quantity + " mice";
       }
       else
       {
           return quantity + " mouse";
       }
   }

    if (noun == 'deer') // special if-else for case of deer
    {
        return quantity + " deer";
    }

    if (noun == 'cactus') // special if-else for case of cacti
    {
        if(quantity > 1)
        {
            return quantity + " cacti";
        }
        else
        {
            return quantity + " cactus";
        }
    }

    if (quantity == 1)
    {
        return quantity + " " + noun;
    }
    else if (quantity >= 1)
    {
        return quantity + " " +  noun + "s";
    }
    else if (quantity < 1)
    {
        return quantity + " " + noun + "s";
    }


}

function dropdown()
{
    var mylist=document.getElementById('mylist');
    var activity = mylist.options[mylist.selectedIndex].text;
    return activity;

}