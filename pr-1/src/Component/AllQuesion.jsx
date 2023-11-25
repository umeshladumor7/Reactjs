import React from "react";

const AllQuesion = () => {
  //1) Find area of circle,rectangle & triangle using arrow function.

  // Triangle

  const Triangle = (l, b, h) => {
    return l * b * h;
  };

  // circle

  const circle = (pi = 3.14, r = 40.52) => {
    return pi * r ** 2;
  };

  // rectangle

  const rectangle = (l = 150, w = 50) => l * w;

  // 2) let a = [1,2,3,4,5] find square & cube of array element.

  // find square

  let a = [1, 2, 3, 4, 5];
  let squares = a.map((numb) => {
    return numb * numb;
  });

  // Find cubes

  let cubes = a.map((numb) => {
    return numb * numb * numb;
  });

  // 3) let b = [11,22,33,44,55] how to display records?

  let b = [11, 22, 33, 44, 55];
  let abc = b;
  b.forEach((abc) => {
    console.log(abc);
  });

  // 4) find 44 element is include in array or not? if element is found return "No is found" else "No is not found" print message.

  // let c = [11, 22, 33, 44, 55];
  // Define the array
  let array = [11, 22, 33, 44, 55];

  // Number to search for
  let numberToFind = 44;

  // Check if the number is in the array
  if (array.includes(numberToFind)) {
    console.log("Number is found");
  } else {
    console.log("Number is not found");
  }

  // 5) let D = [10,20,30,40,50] find sum of array elements.

  let D = [10, 20, 30, 40, 50];
  const sum = D.reduce((a, b) => a + b);

  // 6) let arr = [11,22,33,44,55] find even & odd elements.

  let arr = [11, 22, 33, 44, 55];
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  // 7) Find year is leap year or not?

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const year = 2021;
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

  // 8) Merge above two array p & q.

  let p = [1, 2, 3, 4, 5];
  let q = [6, 7, 8, 9, 10];
  let r = [...p, ...q];

  // 10) count how many time elements are include in array.
  // let a= ["mango","orange","mango","apple",apple","pineple","apple"]

  let E = ["mango", "orange", "mango", "apple", "apple", "pineapple", "apple"];

  const countElements = (arr) => {
    return arr.reduce((count, element) => {
      count[element] = (count[element] || 0) + 1;
      return count;
    }, {});
  };

  const result = countElements(E);

  console.log(result);

  return (
    <>
      {/* Q-1 */}

      <div>
        <h3>AREA OF TRINGLE IS....{Triangle(15, 25, 35)} </h3>
        <h3>AREA OF CIRCLE IS...{circle()} </h3>
        <h3>AREA OF RECTANGLE.....{rectangle()} </h3>
      </div>

      {/* Q-2 */}

      <div>
        <h3>FIND SQUARES {squares + " "}</h3>
        <h3>FIND CUBES {cubes + " "}</h3>
      </div>

      {/* Q-3 */}

      <div>
        <h3>DISPLAY RECORD.... {abc + " "}</h3>
        <h3>{}</h3>
      </div>

      {/* Q-4 */}
      <div>
        <h3>FIND THE NUMBER IN ARRAY {numberToFind}</h3>
      </div>

      {/* Q-5 */}
      <div>
        <h3>SUM OF ARRAY ELEMENTS {sum}</h3>
      </div>

      {/* Q-6 */}
      <div>
        <h3> EVEN NUMBER IS {even + " "}</h3>
        <h3> ODD NUMBER IS {odd + " "}</h3>
      </div>

      {/* Q-8 */}
      <div>
        <h3>MERGE ABOVE TWO ARRAY...{r + " "}</h3>
      </div>

      {/* Q-9 */}
      <div>{/* <h3>MERGE ABOVE TWO ARRAY...{emp}</h3>   */}</div>

      {/* Q-10 */}
      {/* <div><h3>MERGE ABOVE TWO ARRAY...{result}</h3>  </div> */}
    </>
  );
};

export default AllQuesion;
