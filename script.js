import * as SymbolIdentifiers from "./modules/symbol-identifiers.mjs";
import slicer from "./modules/slicer.mjs";
import clearField from "./modules/clear-field.mjs";

/* Access the buttons on the html file */
const btn = document.querySelector(".buttons");

const nums = document.querySelectorAll(".num");

/* Access the signs of operation (×, +, −, ÷) */
const operands = document.querySelectorAll(".operand");
const inp = document.getElementById("ans");

/*
 * =============================================================================================
 */
/* Stores the elements pressed on the calculator interface */
// const values = [];
let values;

/*
 * =============================================================================================
 */
/* Invoked when an input is made on the calculator interface input field. This function records the values 
entered through the mechanical keyboard on the input variable above */
const input = (e) => {
  const keyCode = e.keyCode;

  /* Ensures that the input values added to the input field are associated with mathematical operations ONLY.
   * Uses the event key code to map out this keys.
   * Numerics 0 to 9
   * Special characters: %, *, (, ), /
   * Mathematical signs: +, -, *
   * and other keys such as delete, enter, backspace, and arrows to facilitate navigation */
  /* Also ensures that the values in the input field are appended and split into an array only when the "Enter" key is pressed */
  if (
    (keyCode >= 48 && keyCode <= 57) || // Numerics 0 to 9, special characters, %, *, (, and )
    keyCode === 8 || // Backspace
    keyCode === 13 || // Enter
    keyCode === 37 || // Left arrow
    keyCode === 39 || // Right arrow
    keyCode === 46 || // Delete
    keyCode === 187 || // Plus (+)
    keyCode === 189 || // Minus (-)
    keyCode === 191 // Forward slash (/)
  ) {
    if (e.key === "Enter") {
      values = inp.value;
      values = values.split("");
      console.log(values);
    }
  } else {
    e.preventDefault();
  }

  // console.log(e);
};

/* Invoked when a click is made on the calculator interface. On the buttons. */
/* This function appends the values clicked from the calculator interface on to the input field and records 
them on the input value above. */
const click = (e) => {
  /* Makes sure that the click is comming from a button and not any other place on the calculator interfce */
  if (e.target.classList.contains("btn")) {
    const input = e.target.innerText;

    /* Prevents appending values that are not to be performed calculations on or don't need to be displayed 
    on the input field such as the equal sign.
     * This values have a class of pull */
    if (!e.target.classList.contains("pull")) {
      inp.value += input;
      console.log(inp.value);
    }

    /* Ensures that the values in the input field are appended split into an array only when the button 
    clicked is the equal sign */
    if (e.target.classList.contains("equals")) {
      values = inp.value;
      values = values.split("");
    }
  }
};

/* Listens for key presses on the mechanical keyboard and invokes the input function */
inp.addEventListener("keydown", input);

/* Listens for clicks made on the caclulator interface and invokes the click function */
btn.addEventListener("click", click);

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
