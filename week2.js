function findarea(r)
{
    var radius = Math.PI*r*r
    return console.log(radius)
}
findarea(10)
//answer 3 and 4
function convert(temp,scale)
{
    
  
    if (scale == "c"||scale == "C")
    {
    var farn = (temp*1.8)+32
    console.log(farn,"F")
    }
    else if (scale == "f"||scale == "F")
    {
    var celc = ((temp-32)*5)/9
    console.log(celc,"C")
    }
    else
    {
        console.log("value should be either in f or c")
    }
}

convert(176,"f")

//answer 5

function isunder50(n) 
{
    for (var i = 0; i <= n.length;i++)
    {
    if (n > 50)
    {
    return console.log("false")
    }
    else if (i == n.length && n<51)
    {
       return console.log("true")
    }
    else
    {
        return console.log("false")
    }
}
}

isunder50([1, 10, 20, 65])