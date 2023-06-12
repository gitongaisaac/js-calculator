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
