
// let firstname = 'Allen';
// if(firstname == 'Allen'){
//        document.write("That is me!"); 
// } else if(firstname == 'Michael'){
//     document.write("That is Michael!");
// }else {
//     document.write("I don't know him!");
// }
// let firstname = 'Ryan';
// let lastname = 'Malate';
// if(firstname == 'Ryan' && lastname == 'Malate'){
//     document.write('That is me.');
// }else{
//     document.write('That is NOT me.')
// }
// let firstname = 'Afsdf';
// const isthisme = firstname == 'Allen' ? "This is me!" : (firstname == 'Michael' ? "This is Michael!" : " THIS IS NOT ANY OF US");
// document.write(isthisme);
// for(let x = 1; x <= 100; x++){
//     console.log("Im Ryan Malate");
// }
// let x = 0; 
// while(x<10)
// {
//     console.log('Ryan');
//     x++;
// }
// for(let x=0;x<50;x++)
// {
//     if(x == 10)
//     {
//         break;
//     }
//     document.write('Allen'+'<br>');
// }
let theworld = "A little apple";
let thelenght = theworld.length;
let counta = 0;
for(let x=0;x<thelenght;x++)
{
    if(theworld[x] == 'a' || theworld[x] == 'A'  )
    {
        counta++;
    }
}
document.write("the number of is: " + counta);