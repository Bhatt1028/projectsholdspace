function assignGrade()
{
    var num1 = Number(document.project1.input1.value);

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
    else if (num1 >= 0)
    {
        return "F. Nice job, ya genius.";
    }

}


function tempbug()
{
var num1 = Number(document.project2.input1.value);

    if(num1 <= 273.15)
{
    document.getElementById('spring').remove();
    document.getElementById('summer').remove();
    document.getElementById('fall').remove();
    return document.getElementById('winter').src = "perimg/winter.jpg";
}
else if (num1 < 283.15)
{
    return document.getElementById('fall').src = "perimg/fall.jpg";
}
else if (num1 <= 299.817)
{
    return document.getElementById('spring').src = "perimg/spring.jpg";
}
else if (num1 >= 299.817)
{
    return document.getElementById('summer').src = "perimg/summer.jpg";
}


}
// thanks to w3 schools for how to remove pictures

function calcount()
{
var cod = document.project3.input1.value.toLowerCase();
var num1 = Number(document.project3.input2.value);

if (cod == 'wl')
{
    return 2 * num1
}
if (cod == 'tv')
{
    return 0.1 * num1
}
if (cod == 'rn')
{
    return 3 * num1
}
if (cod == 'lw')
{
    return 10 * num1
}
if (cod == 'vg')
{
    return 1.1 * num1
}
if (cod == 'ef')
{
    return 123 * num1
}


}


/*
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


 */
/*
<form name="project4">
    <h4>Word Pluralinator</h4>
    <br>
    Type a quantity:
    <input name="num1" type="text">
    <br><br>
    Type in noun:
    <input name="word1" type="text">
    <br><br>

    Result: <input name="result" type="text" readonly="true" style="border-style: none">
    <br><br>
    <button type="button" onclick="document.project4.result.value=pluralize()">Plural it!</button>

</form>
 */