const button = document.querySelector(".buttons");
const operands = document.querySelectorAll(".operand");

const values = [];

// class Screen {
const click = (e) => {
  if (e.target.classList.contains("btn")) {
    const input = e.target.innerText;

    let problem;
    if (e.target.classList.contains("operand")) {
      // values.push(" ", e.target.innerText, " ");
    }

    if (!e.target.classList.contains("pull")) {
      values.push(input);

      problem = document.getElementById("ans").value = values[0];
      for (let i = 1; i < values.length; i++) {
        document.getElementById("ans").value = problem += values[i];
      }
    }

    if (e.target.classList.contains("equals")) {
      bracket();
    }
  }
};
// }

button.addEventListener("click", click());

// class Op {
const append = () => {
  let left, right, problem;

  const indexOfEquals = values.indexOf("=");

  let indexOfOperand;
  left = problem = values[0];
  for (let i = 1; i < values.length; i++) {
    problem += problem;

    for (let j = 0; j < operands.length; j++) {
      if (values[i] === operands[j].innerText) {
        indexOfOperand = values.indexOf(values[i]);
      }
    }
  }

  for (let i = 1; i < indexOfOperand; i++) {
    left += values[i];
  }

  right = values[indexOfOperand + 1];
  for (let i = indexOfOperand + 2; i < indexOfEquals; i++) {
    right += values[i];
  }

  console.log(problem);
  console.log(left);
  console.log(right);
};

const createProblem = () => {
  let problem = values[0];

  for (let i = 1; i < values.length; i++) {
    problem += values[i];
  }
};
// }

// class Calculations {

const bracketSlicer = () => {};

const bracket = () => {
  console.log(values);

  let lastIndexOfsign, lastIndexOfbr, noOfOpen, noOfClosed;

  noOfOpen = 0;
  noOfClosed = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "(") {
      noOfOpen++;

      const indexOfbr = values.indexOf(values[i]);

      for (let j = 0; j < indexOfbr; j++) {
        for (let k = 0; k < operands.length; k++) {
          if (values[j] === operands[k].innerText) {
            lastIndexOfsign = values.lastIndexOf(values[j]);
            console.log(lastIndexOfsign);
          }
        }
      }
    }

    if (values[i] === ")") {
      noOfClosed++;
      // console.log(values.lastIndexOf(values[i]));
    }

    if (noOfClosed === noOfOpen) {
      console.log("close parenthisis");
    }
  }

  console.log(noOfOpen);
  console.log(noOfClosed);
};

const division = () => {
  console.log("Division");
};

const multiplication = () => {
  console.log("multiplication");
};

const addition = () => {
  console.log("Addition");
};

const subtraction = () => {
  console.log("Subtraction");
};
// }
