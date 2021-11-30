// const myNumber = 3;
// const myFunction = (thisNumber) => {
//     const thisSum = thisNumber * 2;
//     return thisSum;
// }


// Metodo return implicito
// const myFunction = (thisNumber) => thisNumber % 2 === 0 ? thisNumber * 2 : thisNumber + 1; 

// const mySum = myFunction(11);

// console.log(mySum);




// const myOtherSum = myOtherFunction(3, 5);

// console.log(myOtherSum);

// function myOtherFunction(...theseNumbers){
    
//     console.log(theseNumbers[0] + theseNumbers[1]);

//     let thisString;

//     const thisOtherSum = theseNumbers[0] + theseNumbers[1];

//     thisString = (thisOtherSum % 2 === 0) ? 'Pari' : 'Dispari';

//     return thisString;
// } 



const pageBody = document.querySelector('body');
// const myBtn = document.createElement('button');
// const myBtn2 = document.createElement('button');
// myBtn.classList.add('btn', 'my_btn', 'border', 'border-2', 'border-info', 'bg-dark', 'text-white');
// myBtn2.classList.add('btn', 'my_btn', 'border', 'border-2', 'border-info', 'bg-dark', 'text-white');

// pageBody.classList.add('w-100', 'vh-100', 'd-flex', 'justify-content-center', 'align-items-center');

// pageBody.append(myBtn, myBtn2);

// myBtn.innerText ='Start';
// myBtn2.innerText ='Stop';



// // myBtn.addEventListener('click', myFunction);

// // function myFunction(){
// //     const clock = setTimeout(() => {
// //         this.classList.remove('bg-dark');
// //         this.style.background = 'red';
// //     }, 1000);
// // }

// // let myCounter = prompt('Quanti secondi mancano a fine anno?');
// let myCounter = 0;
// console.log(myCounter);



// let clock;

// myBtn.addEventListener('click', function(){

//     clock = setInterval(function(){
//         myCounter++;
//         console.log(myCounter);
//     }, 1000);
// });

// myBtn2.addEventListener('click', function(){
//     clearInterval(clock);
// });

const myWrapper = document.createElement('div');
const myObject = document.createElement('span');
const myButtonsWrapper = document.createElement('div');
const myButton1 = document.createElement('button');
const myButton2 = document.createElement('button');
const myButton3 = document.createElement('button');
const myButton4 = document.createElement('button');

pageBody.classList.add('w-100', 'vh-100', 'd-flex', 'justify-content-center', 'align-items-center');
myWrapper.classList.add('w-50', 'h-50',  'd-flex', 'flex-column', 'justify-content-around', 'align-items-center', 'border', 'border-5', 'border-dark');
myObject.classList.add('w-25', 'border', 'border-5', 'border-dark', 'text-center');
myButton1.classList.add('border', 'border-5', 'border-dark');
myButton2.classList.add('border', 'border-5', 'border-dark');
myButton3.classList.add('border', 'border-5', 'border-dark');
myButton4.classList.add('border', 'border-5', 'border-dark');

let myCounter = 10;
let myConsoleCounter = 10;
console.log(myConsoleCounter);

myObject.innerText = myCounter;
myButton1.innerText = 'Bottone 1';
myButton2.innerText = 'Bottone 2';
myButton3.innerText = 'Bottone 3';
myButton4.innerText = 'Bottone 4';

pageBody.appendChild(myWrapper);
myWrapper.append(myObject, myButtonsWrapper);
myButtonsWrapper.append(myButton1, myButton2, myButton3, myButton4);

const clock2 = setTimeout(function(){
    
    alert('Tempo scaduto');
}, 10000);

const clock = setInterval(function(){
    myCounter--;
    myObject.innerText = myCounter;
    if(myCounter === 0){
        clearInterval(clock);
    }
}, 1000);

myButton3.addEventListener('click', function(){
    clearTimeout(clock);
    clearTimeout(clock2);
});
