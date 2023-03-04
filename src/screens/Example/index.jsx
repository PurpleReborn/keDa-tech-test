import React, { useEffect, useState } from 'react'

function Example() {

  const handleSoal1 = (count) => {
    console.log('Jawaban Soal 1')
    for (let i = 1; i <= count; i++) {
      if (i % 15 === 0) {
        console.log("fish bash");
      } else if (i % 3 === 0) {
        console.log("fish");
      } else if (i % 5 === 0) {
        console.log("bash");
      } else {
        console.log(i);
      }
    }
  }

  const handleSortAsc = (arr) => {
    console.log("Sorting ascending");
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log(arr);
  };

  const handleSortDesc = (arr) => {
    console.log('Sorting descending')
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log(arr)
  }

  const handleSoal2 = () => {
    console.log('Jawaban soal 2')
    handleSortAsc([5, 3, 9, 1, 4]);
    handleSortDesc([5, 3, 9, 1, 4]);
  }

  const handleSoal3 = (str) => {
    console.log(`Input: ${str}`)
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    console.log(`is Palindrome = '${str === reversedStr}`);
  }


  useEffect(() => {
    handleSoal1(10)
    handleSoal2();
    handleSoal3('hello');
    handleSoal3('ada');
  }, [])

  return (
    <div>Jawaban Soal 1 ada di console log</div>
  )
}

export default Example