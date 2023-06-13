import { sliceStart, sliceEnd } from "./slice-range";

/* identifies the divide sign and returns the slice start and slice end of the operation containing the divide sign.
 * Accepts 1 parameter and implements the functions sliceStart and sliceEnd to return the slice start and slice end */
const divideSymbolIdentifier = (problem) => {
  let indexOfDivide, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "÷") {
      indexOfDivide = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = sliceStart(indexOfDivide, 0, problem, "×", "+", "−");
  indexOfEnd = sliceEnd(indexOfDivide, problem.length, problem, "×", "+", "−");

  return [indexOfStart, indexOfEnd];
};

/*
 * =============================================================================================
 */
/* identifies the multiplication sign and returns the slice start and slice end of the operation containing the multiplication sign.
 * Accepts 1 parameter and implements the functions sliceStart and sliceEnd to return the slice start and slice end */
const multiplySymbolIdentifier = (problem) => {
  let indexOfMultiply, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "×") {
      indexOfMultiply = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = sliceStart(indexOfMultiply, 0, problem, "÷", "+", "−");
  indexOfEnd = sliceEnd(
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
 * Accepts 1 parameter and implements the functions sliceStart and sliceEnd to return the slice start and slice end */
const addSymbolIndetifier = (problem) => {
  let indexOfAdd, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "+") {
      indexOfAdd = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = sliceStart(indexOfAdd, 0, problem, "÷", "×", "−");
  indexOfEnd = sliceEnd(indexOfAdd, problem.length, problem, "÷", "×", "−");

  return [indexOfStart, indexOfEnd];
};

/*
 * =============================================================================================
 */
/* identifies the subtraction sign and returns the slice start and slice end of the operation containing the subtraction sign.
 * Accepts 1 parameter and implements the functions sliceStart and sliceEnd to return the slice start and slice end */
const subtractSymbolIdentifier = (problem) => {
  let indexOfAdd, indexOfStart, indexOfEnd;

  for (let i = 0; i < problem.length; i++) {
    if (problem[i] === "−") {
      indexOfAdd = problem.indexOf(problem[i]);
      break;
    }
  }

  indexOfStart = sliceStart(indexOfAdd, 0, problem, "÷", "×", "+");
  indexOfEnd = sliceEnd(indexOfAdd, problem.length, problem, "÷", "×", "+");

  return [indexOfStart, indexOfEnd];
};

export {
  divideSymbolIdentifier,
  multiplySymbolIdentifier,
  addSymbolIndetifier,
  subtractSymbolIdentifier,
};
