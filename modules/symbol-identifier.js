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

  return [indexOfStart, indexOfEnd];
};

/*
 * =============================================================================================
 */
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

  return [indexOfStart, indexOfEnd];
};

/*
 * =============================================================================================
 */
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

  return [indexOfStart, indexOfEnd];
};

/*
 * =============================================================================================
 */
/* identifies the subtraction sign and returns the slice start and slice end of the operation containing the subtraction sign.
 * Accepts 1 parameter and implements the functions slice_start and slice_end to return the slice start and slice end */
const subtract_symbol_identifier = (problem) => {
  let indexOfAdd, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "−") {
      indexOfAdd = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = slice_start(indexOfAdd, 0, problem, "÷", "×", "+");
  indexOfEnd = slice_end(indexOfAdd, problem.length, problem, "÷", "×", "+");

  return [indexOfStart, indexOfEnd];
};
