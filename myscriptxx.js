function primeNums()
{
   /* var x = 8;
    var y = 3;
    var z = x % y;
    alert (z); */
   var checknum = 22;
   var isPrime = true;
   for (var i=checknum-1; i>1; i--)
   {
       if (checknum % i == 0) // no remainder, therefore not prime
       {
           isPrime=false;
           return document.primes.getElementById('input1').value="not prime"
          // alert("test: No remainder i = " + i + isPrime)
       }
       /*else
       {
           isPrime=true;
           alert("test: Remainder present i = " + i + isPrime)
       }*/
   }
   //alert(isPrime);
    if (isPrime == true)
    {
        alert(checknum + " is prime")
    }
    else
    {
        alert(checknum + " is not prime")
    }
}