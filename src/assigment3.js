 //1.
for ( let i = 1; i<=10; i++){
  console.log(i)
}

//2.
for(let i = 10; i >= 1; i--){
  console.log(i);
}

//3.
let sum = 0; //start counting from 0
for (let i = 1; i <= 50; i++) {//loop from 1 to 50
    sum += i;
}
console.log(sum);//The code will calculate the sum of all numbers from 1 to 50, and the result will be 1275.

//4.
for (let i = 0; i < 10; i += 2) {
  console.log(i);// 5 iterations 0 2 4 6 8, increase by 2
}
 
//5
for (let i = 1; i < 10; i++){
  if (i === 5) { 
    break; //loop will run until 4 and stopped strictly bc of break statement,doesnt matter i<10
  }
  console.log(i);
}

//6.
for (let i = 1; i<10; i++){
  if ( i === 3){
    continue //it will run code from 1 to 9 but skip the 3 
  }
console.log(i);
}

//7
for(let i = 1; i <= 100; i++){
  if (i===27){
    break
  }
  console.log(i)
}

//8
for(let i = 1; i <= 100; i++){
  if ( i % 3 === 0){
    console.log('Fizz')
  }
  else if ( i % 5=== 0){
    console.log('Buzz')
  }
  else if ( i% 3 === 0 && i % 5 === 0){ 
  console.log('FizzBuzz');
  }
  else{
    console.log(i);
    }
}

//9
for(let i = 0; i<=100; i++){
  let ranDom = Math.floor(Math.random()* 100) + 1;
  console.log(ranDom);
}

//10
let total = 0; 
for(let i = 2; i<=1000; i+=2){
  total += i;
}
  console.log(total );

  //11.
  let count = 0;
  for(let i =1; i <= 1000; i++){
    if(i % 3 === 0 || i % 5 ===0){
      count +=i;
    }
    }
    console.log(count)
  
    //12
    let result = 0;
  for(let i =1; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 ===0){
      result +=i;
    }
    }
    console.log(result)

    
    //13.
     let passwordBox = document.getElementById("password");
        let length = 12;

        let upperCase = "MNBVCXZASDFHJKLPOIUYTREWQ";
        let lowerCase = "mnbvcxzasdfghjklpoiuytrewq";
        let number = "0123456789";

        let allChars = upperCase + lowerCase + number;

        function createPassword() {
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += number[Math.floor(Math.random() * number.length)];

            while (password.length < length) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
            passwordBox.value = password;
        }
//14.????
     //15..?  
let roomSize = 10;
let emptySpace =" ";
let room = Array.from ({length: roomSize },() => Array(roomSize).fill(emptySpace));

let wall = "#";
for(let i =  0; i<roomSize; i++){
  room[0][i] = wall;
  room[roomSize - 1][i] = wall;
  room[i][0] = wall;
  room[i][roomSize - 1] = wall;
}
let mysteryRow, mysteryCol;
do {
    mysteryRow = Math.floor(Math.random() * (roomSize - 2)) + 1; 
    mysteryCol = Math.floor(Math.random() * (roomSize - 2)) + 1; 
} while (room[mysteryRow][mysteryCol] !== emptySpace); 
room[mysteryRow][mysteryCol] = mystery;


const roomString = room.map(row => row.join("")).join("\n");
return roomString;


console.log(generateRoom());



