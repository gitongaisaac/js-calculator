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
