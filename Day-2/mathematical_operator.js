// prob1 Operation on Numbers
function number(num)
{
     num = num*3+7
    return num
}
console.log(number(4))


// prob2 Square It

function Find_Square(N)
{
  N =N**2
  return N
}
console.log(Find_Square(7))


// prob3 Find Product
let product
function Find_Product(one,two,three,four,five)
{
     product = one*two*three*four*five
    console.log(product)
}
Find_Product(1,2,3,4,5)
console.log(product)

// prob4 Double all and find sum
let sum
function Double_all(one,two,three,four,five)
{
     sum =(one+two+three+four+five)*2
     return sum
}
Double_all(1,2,3,4,5)
console.log(sum)

// prob5 Double Two Triple One and find sum
let sum1
function Double_two_Triple_One(one,two,three,four)
{
    one =one+one
    two = two+two
    three =three*three
    four =four+four
    sum1 =one+two+three+four
    return sum1
}
Double_two_Triple_One(1,2,3,4)
console.log(sum1)

// prob6  Seven Numbers
let products
function seven_number(A,B,C,D,E,F,G)
{
     products =(A+B+C)*(D+E+F+G)
     return products
}
seven_number(1,2,3,4,5,6,7)
console.log(products)

// prob7 Find X again

function Find_X(x)
{
    x = x*7*7
    return x
}
console.log(Find_X(6))


// prob8 Infinity Stones and find sum
let sum2
function Infinity_Stones(one,two,three,four,five,six)
{
    two =two+two
    five =five+five
    six =six+six
    three =three*3
    four =four*3
    sum2 =one+two+three+four+five+six
    return sum2
}
Infinity_Stones(1,2,3,4,5,6)
console.log(sum2)


// prob9 Update & Compare

function Update_Compare(num1,num2,num3)
{
    let number =num1>num2
    console.log(number)
    num1 =num1+num3
    number =num1>num2
    console.log(number)
}
Update_Compare(4,8,5)


// prob10 Compare two Numbers

function Compare_two_Numbers(num1,num2)
{
    let number = num1>num2
    console.log(number)
    number = num1<num2
    console.log(number)
    number =  num1==num2
    console.log(number)
     
}
Compare_two_Numbers(4,16)


// prob11 Sum & Compare

function Sum_Compare(one,two,three,four,five)
{
    let sum1 =one+two+three
    let sum2 =four+five
    let number=sum1>sum2
    console.log(number)
}
Sum_Compare(1,2,3,4,5)


// prob12 Compare Seven Numbers

function CompareSevenNumbers(a,b,c,d,e,f,g)
{
    let sum1 =(a+b)*c
    let sum2 = d+e+f+g
    let number = sum1 > sum2
    console.log(number)
}
CompareSevenNumbers(1,2,3,4,5,6,7)


// prob13 Area and Perimeter

function AreaAndPerimeter(L1,B1,L2,B2)
{
    let area_of_rectangle_1= L1*B1;
    let area_of_rectangle_2= L2*B2;
    console.log(area_of_rectangle_1>area_of_rectangle_2);
    let perimeter_of_rectangle_1= (L1+B1)*2;
    let perimeter_of_rectangle_2= (L2+B2)*2;
    console.log(perimeter_of_rectangle_1>perimeter_of_rectangle_2);
    
}
AreaAndPerimeter(1,2,2,3)


// prob14 Cube and Square

function Cube_and_Square(n,m)
{
   n=n**3
   m=m**2
   let check = n>m
   console.log(check)
}
Cube_and_Square(2,3)