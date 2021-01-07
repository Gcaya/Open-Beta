import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  saveNewProblem: ['data'],
  setProblemData: ['data'],
  viewHistoricProblem: ['id'],
  viewNewProblem: ['data'],
})

export const ProblemSolverTypes = Types
export default Creators
