/* Returns the index where the slice should start. Accepts 6 parameters */
const sliceStart = (start, end, problemAti, sign1, sign2, sign3) => {
  let indexOfStart;

  for (let i = start; i >= end; i--) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfStart = problemAti.indexOf(problemAti[i]);
      break;
    } else {
      indexOfStart = problemAti.indexOf(problemAti[i]);
    }
  }

  return indexOfStart;
};

/*
 * =============================================================================================
 */
/* Returns the index where the slice should end accepts 6 parameters  */
const sliceEnd = (start, end, problemAti, sign1, sign2, sign3) => {
  let indexOfEnd;

  for (let i = start; i < end; i++) {
    if (
      problemAti[i] === sign1 ||
      problemAti[i] === sign2 ||
      problemAti[i] === sign3
    ) {
      indexOfEnd = problemAti.indexOf(problemAti[i]);
      break;
    } else {
      indexOfEnd = problemAti.indexOf(problemAti[i]);
    }
  }

  return indexOfEnd;
};

export { sliceStart, sliceEnd };
