export function getProblemsRequest(id) {
  return {
    type: '@problems/GET_PROBLEMS_REQUEST',
    payload: { id },
  }
}

export function getProblemsSuccess(problems) {
  return {
    type: '@problems/GET_PROBLEMS_SUCCESS',
    payload: problems,
  }
}

export function createProblemRequest(id, description) {
  return {
    type: '@problems/CREATE_PROBLEM_REQUEST',
    payload: { id, description },
  }
}

export function createProblemSuccess(problem) {
  return {
    type: '@problems/CREATE_PROBLEM_SUCCESS',
    payload: problem,
  }
}
