const button = document.querySelector(".buttons");
const operands = document.querySelectorAll(".operand");

const values = [];

class Screen {
  static click(e) {
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

      console.log(values);

      if (e.target.classList.contains("equals")) {
        // Op.append();
        Op.chain();
      }
    }
  }
}

button.addEventListener("click", Screen.click);

class Op {
  static append() {
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
  }

  static chain() {
    let signs = [];
    let leftHands = [];
    let problem = values[0];

    let noOfSigns = 0;
    for (let i = 0; i < values.length; i++) {
      problem += problem[i + 1];

      for (let j = 0; j < operands.length; j++) {
        if (values[i] == operands[j].innerText) {
          signs.push(values[i]);

          for (let k = 0; k < signs.length; k++) {
            console.log(signs[k]);
          }
          const hasdivision = operands[j].classList.contains("divide");
          const hasMultiply = operands[j].classList.contains("multiply");
          const hasAddition = operands[j].classList.contains("plus");
          const hadSubtraction = operands[j].classList.contains("minus");

          // if (operands[j].classList.contains("divide")) {
          //   Calculations.division();
          // } else if (operands[j].classList.contains("multiply")) {
          //   Calculations.multiplication();
          // } else if (operands[j].classList.contains("plus")) {
          //   Calculations.addition();
          // } else {
          //   Calculations.subtraction();
          // }
        }
      }
    }

    // console.log(problem);

    for (let k = 0; k < signs.length; k++) {
      noOfSigns++;

      let names = "left" + k;
      leftHands.push(names);

      // console.log(signs[k]);
    }
  }
}

class Calculations {
  static division() {
    console.log("Division");
  }

  static multiplication() {
    console.log("multiplication");
  }

  static addition() {
    console.log("Addition");
  }

  static subtraction() {
    console.log("Subtraction");
  }
}
