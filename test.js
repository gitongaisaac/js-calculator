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

/* Returns the index where the slice should start. Accepts 6 parameters */
const slice_start = (start, end, problemAti, sign1, sign2, sign3) => {
  let indexOfStart;

  for (let i = start; i >= end; i--) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfStart = problemAti.indexOf(problemAti[i]);
      break;
    } else {
      indexOfStart = problemAti.indexOf(problemAti[i]);
    }
  }

  return indexOfStart;
};

/* Returns the index where the slice should end accepts 6 parameters  */
const slice_end = (start, end, problemAti, sign1, sign2, sign3) => {
  let indexOfEnd;

  for (let i = start; i < end; i++) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfEnd = problemAti.indexOf(problemAti[i]);
      break;
    } else {
      indexOfEnd = problemAti.indexOf(problemAti[i]);
    }
  }

  return indexOfEnd;
};

/* identifies the divide sign and returns the slice start and slice end of the operation containing the divide sign.
 * Accepts 1 parameter and implements the functions slice_start and slice_end to return the slice start and slice end */
const divide_symbol_identifier = (problem) => {
  let indexOfDivide, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "÷") {
      indexOfDivide = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = slice_start(indexOfDivide, 0, problem, "×", "+", "−");
  indexOfEnd = slice_end(indexOfDivide, problem.length, problem, "×", "+", "−");
};

/* identifies the multiplication sign and returns the slice start and slice end of the operation containing the multiplication sign.
 * Accepts 1 parameter and implements the functions slice_start and slice_end to return the slice start and slice end */
const multiply_symbol_identifier = (problem) => {
  let indexOfMultiply, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "×") {
      indexOfMultiply = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = slice_start(indexOfMultiply, 0, problem, "÷", "+", "−");
  indexOfEnd = slice_end(
    indexOfMultiply,
    problem.length,
    problem,
    "÷",
    "+",
    "−"
  );
};

/* identifies the addition sign and returns the slice start and slice end of the operation containing the addition sign.
 * Accepts 1 parameter and implements the functions slice_start and slice_end to return the slice start and slice end */
const add_symbol_indetifier = (problem) => {
  let indexOfAdd, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "+") {
      indexOfAdd = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = slice_start(indexOfAdd, 0, problem, "÷", "×", "−");
  indexOfEnd = slice_end(indexOfAdd, problem.length, problem, "÷", "×", "−");
};

/* identifies the subtraction sign and returns the slice start and slice end of the operation containing the subtraction sign.
 * Accepts 1 parameter and implements the functions slice_start and slice_end to return the slice start and slice end */
const subtract_symbol_identifier = (problem) => {
  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "−") {
      indexOfAdd = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = slice_start(indexOfAdd, 0, problem, "÷", "×", "+");
  indexOfEnd = slice_end(indexOfAdd, problem.length, problem, "÷", "×", "+");
};
