import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { ProblemSolverTypes } from './Actions'

export const setProblemData = (state, { data }) => ({
  ...state,
  problem: {
    id: null,
    data: data,
  }
})

export const reducer = createReducer(INITIAL_STATE, {
    [ProblemSolverTypes.SET_PROBLEM_DATA]: setProblemData,
})