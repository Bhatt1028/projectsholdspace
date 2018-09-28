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