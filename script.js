/* Access the buttons on the html file */
const button = document.querySelector(".buttons");

/* Access the signs of operation (×, +, −, ÷) */
const operands = document.querySelectorAll(".operand");

/*
 * =============================================================================================
 */
/* Stores the elements pressed on the calculator interface */
const values = [];

/*
 * =============================================================================================
 */
/* This function is passed to the event listener, takes the events target inner text and appends it to the array above (values) */
const click = (e) => {
  /* Check if the events target has a class of btn */
  if (e.target.classList.contains("btn")) {
    const input = e.target.innerText;

    let problem;
    if (e.target.classList.contains("operand")) {
      // values.push(" ", e.target.innerText, " ");
    }

    /* Prevents the push of values that are not to be performed calculations on such as the equal sighn.
     * This values have a class of pull */
    if (!e.target.classList.contains("pull")) {
      values.push(input);

      problem = document.getElementById("ans").value = values[0];
      for (let i = 1; i < values.length; i++) {
        document.getElementById("ans").value = problem += values[i];
      }
    }

    /* Calls the bracket_indetifier function to start the calculations after the equls sign is hit */
    if (e.target.classList.contains("equals")) {
      operation_assigner();
    }
  }
};

/*
 * =============================================================================================
 */
/* An event listener listens to a click event */
button.addEventListener("click", click);

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
    }
  }
};

/*
 * =============================================================================================
 */
/* Identifies the appropriate symbol of operation according to the rules of mathematical order of operations */
const symbol_identifier = (problem) => {};

/*
 * =============================================================================================
 */
/* Slices the array to the required operation */
const operation_slicer = (problem) => {
  const symbols = ["+", "÷", "×", "−"];
  console.log(problem);

  for (let i = 0; i < problem.length; i++) {
    symbols.forEach((symbol) => {
      if (symbol === problem[i]) {
        console.log(true);
        console.log(problem[i]);
      } else {
        console.log(false);
      }
    });
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
  operation_slicer(problem);
};

/*
 * =============================================================================================
 */
/* Handles Division */
const division = () => {
  console.log("Division");
};

/*
 * =============================================================================================
 */
/* Handles multiplication */
const multiplication = () => {
  console.log("multiplication");
};

/*
 * =============================================================================================
 */
/* Handles addition */
const addition = () => {
  console.log("Addition");
};

/*
 * =============================================================================================
 */
/* Handles subtraction */
const subtraction = () => {
  console.log("Subtraction");
};
