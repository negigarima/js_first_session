/*var variable=prompt("enter number");
prompt
if(variable==="1")
{
    console.log("one");
}
else if(variable==="2")
{
    console.log("two");
}
else if(variable==="3")
{
    console.log("three");
}
else
{
    console.log("others");
    document.write("Other")
}

function Entername()
{
return prompt("enter name");
}

function Myname()
  var name=Entername();  
alert("Welome "+ name);
}
Myname();
*/
function Pattern()
{
    var i, j;
  //outer loop
  for(i=1; i <= 5; i++)
   {
   //inner loop
    for(j=1; j<=i; j++)
   {
     document.write('*');
    }
     document.write('<br/>');
   }
}
Pattern();
