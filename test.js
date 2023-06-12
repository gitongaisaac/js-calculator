/*
 * =============================================================================================
 */
// const display = (index) => {
//   return index;
// };

// const loop = (start, end, callback) => {
//   for (let i = start; i < end; i++) {
//     callback(i);
//   }
// };

// const digits = [1, 2, 3, 4, 5, 6, 4, 3, 7, 8, 9];

// loop(0, digits.length, (index) => {
//   if (index === 7) {
//     console.log(`The index is ${index}`);
//   }
// });

const slice_start = (start, end, problemAti, sign1, sign2, sign3) => {
  for (let i = start; i < end; i++) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfStart = problemAti.indexOf(problemAti[i]);
      return indexOfStart;
    }
  }
};

const slice_end = (start, end, problemAti, sign1, sign2, sign3) => {
  for (let i = start; i >= end; i--) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfStart = problemAti.indexOf(problemAti[i]);
      return indexOfStart;
    }
  }
};

const divide_symbol_identifier = () => {
  const problem = [
    "2",
    "4",
    "+",
    "1",
    "3",
    "×",
    "7",
    "0",
    "÷",
    "1",
    "2",
    "−",
    "1",
    "7",
    "8",
  ];

  let indexOfDivide, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "÷") {
      indexOfDivide = problem.indexOf(problem[i]);
      break;
    }
  }

  for (let i = indexOfDivide; i < problem.length; i++) {
    if (problem[i] === "+" || problem[i] === "×" || problem[i] === "−") {
      indexOfEnd = problem.indexOf(problem[i]);
    }
  }

  for (let i = indexOfDivide; i >= 0; i--) {
    if (problem[i] === "+" || problem[i] === "×" || problem[i] === "−") {
      indexOfEnd = problem.indexOf(problem[i]);
    }
  }
};

const multiply_symbol_identifier = (problem) => {
  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "×") {
    }
  }
};

const add_symbol_indetifier = () => {
  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "+") {
    }
  }
};

const subtract_symbol_identifier = () => {
  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "−") {
    }
  }
};

// divide_symbol_identifier();
