function solution(A) {
  // Given an array A of N integers, returns the smallest
  // positive integer (greater than 0) that does not occur in A.

  // Making sure we don't have any duplicates
  const mySet = new Set(A);

  // Making sure we have an ordered array
  let myArray = [...mySet].sort((a, b) => a - b);

  // Making sure we don't have any numbers bellow 1 in the array
  myArray = myArray.filter((n) => n > 0);

  // Treating special cases:
  // 1. If now array is empty, return 1
  if (myArray.length === 0) return { myArray, result: 1 }; // FIXME: This is just for debugging purposes!
  //                                                                 The correct return should be just the integer!
  //                                                                 Same thing in all return places below!

  // 2. If the last number in the array is exactly the size of the array, then there's no gaps
  if (myArray[myArray.length - 1] === myArray.length) return { myArray, result: myArray.length + 1 }; // FIXME:

  // 3. If the array has only one element, it HAS to be 1 (then returns 1), otherwise returns 2;
  if (myArray.length === 1) {
    if (myArray[0] !== 1) return { myArray, result: 1 };
    else return { myArray, result: 2 }; // FIXME:
  }

  // 4. If the array doesn't start with 1, no matter the size, returns 1;
  if (myArray[0] !== 1) return { myArray, result: 1 };

  // Done with special cases, now find the gap
  let result;
  for (let i = 1; i < myArray.length; i++) {
    // If the difference between two of the numbers in the array is greater than 1, then there's a gap
    if (myArray[i] - myArray[i - 1] > 1) {
      result = myArray[i - 1] + 1;
      break;
    }
  }

  return { myArray, result }; // FIXME:
}

// Some test cases
console.clear();
console.log('Results: \n');

console.log(solution([4, 5, 6, 2])); // 1
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([-2, -1, 0, 2])); // 1
console.log(solution([-2, -1, 0, 1])); // 2

console.log(solution([6, -2341, 1, -21343, 4, -126, 0, 4, 1, 2, 9, 12, 234, 563, 346545764, 3, 5])); // 7
console.log(solution([1, -2341, 2, -21343, 4, -126, 0, 234, 563, 346545764])); // 3
console.log(
  solution([
    11,
    16,
    1,
    17,
    2,
    3,
    27,
    4,
    24,
    6,
    8,
    10,
    14,
    22,
    12,
    30,
    7,
    28,
    13,
    25,
    23,
    26,
    5,
    21,
    20,
    19,
    29,
    15,
    18,
    17,
    9,
    16,
    14,
  ])
); // 31
console.log(
  solution([
    11,
    16,
    1,
    17,
    2,
    3,
    27,
    4,
    24,
    6,
    8,
    10,
    14,
    22,
    12,
    30,
    7,
    28,
    13,
    23,
    31,
    26,
    5,
    21,
    20,
    19,
    29,
    15,
    18,
    17,
    9,
    16,
    14,
  ])
); // 25
