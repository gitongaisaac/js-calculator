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
