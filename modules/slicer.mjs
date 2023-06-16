const slicer = (problem, indexOfStart, indexOfEnd) => {
  const newProblem = problem.slice(indexOfStart, indexOfEnd);

  return newProblem;
};

export default slicer;
