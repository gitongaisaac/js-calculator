import * as SymbolIdentifiers from "./modules/symbol-identifiers.mjs";
import slicer from "./modules/slicer.mjs";
import clearField from "./modules/clear-field.mjs";

/* Access the buttons on the html file */
const button = document.querySelector(".buttons");

/* Access the signs of operation (×, +, −, ÷) */
const operands = document.querySelectorAll(".operand");
const inp = document.getElementById("ans");

/*
 * =============================================================================================
 */
/* Stores the elements pressed on the calculator interface */
const values = [];

/*
 * =============================================================================================
 */
console.log(inp);
inp.addEventListener("input", (e) => {
  console.log(true);
  console.log(inp.value);
});

/*
 * =============================================================================================
 */
/* Assigns which function the values should go to, whether bracket_identifier, multiplication, divsion, addition or subtraction.
 * If follows the rules of mathematical order of operations, e.g, bracket elements are to be worked out first, then division, multiplication
 * addition and finally subtraction */
const operation_assigner = () => {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "(") {
      bracket_slicer();
      break;
    } else {
      operations();
    }
  }
};

/*
 * =============================================================================================
 */
/* Converts the sliced array from string form */
const operation_converter = (problem) => {
  if (typeof problem[0] === "string") {
    console.log(problem);
  } else {
  }
};

/*
 * =============================================================================================
 */
/* This function identifies brackets and slices the innermost first set of brackets to form a new one */
const bracket_slicer = () => {
  console.log(values);

  let indexOfClose, indexOfOpen;

  /* Loops form the start of array and identify the first close bracket saves its index as indexOfClose and breaks the loop */
  for (let i = 0; i < values.length; i++) {
    if (values[i] === ")") {
      indexOfClose = values.indexOf(values[i]);
      break;
    }
  }

  /* Loops the array from indexOfClose (loops in reverse), identifies the last Index Of open bracket,
   * saves it as indexOfOpen and breaks the loop */
  for (let i = indexOfClose; i > 0; i--) {
    if (values[i] === "(") {
      indexOfOpen = values.lastIndexOf(values[i]);
      break;
    }
  }

  /* Loops the array from indexOfOpen (loops in reverse): to find out if there were any elements to be multiplied by the contents in the
   * bracket, finds the first sign of operation from indexOfOpen and slices the elements from that sign to indexOfOpen */
  let indexOfSign;
  for (let i = indexOfOpen - 1; i > 0; i--) {
    if (
      values[i] === "÷" ||
      values[i] === "+" ||
      values[i] === "×" ||
      values[i] === "−"
    ) {
      indexOfSign = values.lastIndexOf(values[i]);
      break;
    }
  }

  /* Digits on the left of the open bracket until the fist symbol of operation */
  const outerDigits = values.slice(indexOfSign + 1, indexOfOpen);

  /* Checks if the length of the outerDigits array is 0, if yes, the it pushes a 1 in string form else nothing happens */
  if (outerDigits.length === 0) {
    outerDigits.push("1");
  } else {
    console.log(false);
  }

  /* Values in the inner bracket */
  const newValues = values.slice(indexOfOpen + 1, indexOfClose);

  // console.log(outerDigits);
  // console.log(newValues);

  bracket_operations(newValues, outerDigits);
};

/*
 * =============================================================================================
 */
/* Does calculations on the elements in the bracket, it accepts two parameters passed from the bracket_slicer()
 * function, the new values and the outer digits of the bracket */
const bracket_operations = (problem, outerDigits) => {
  console.log(outerDigits);
  console.log(problem);

  const [indexOfStart, indexOfEnd] =
    SymbolIdentifiers.divideSymbolIdentifier(problem);

  const newProblem = slicer(problem, indexOfStart, indexOfEnd);

  console.log(newProblem);
};

const operations = () => {
  // console.log(values);
};
