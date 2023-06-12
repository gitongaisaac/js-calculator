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
