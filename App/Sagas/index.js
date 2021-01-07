import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { ProblemSolverTypes } from 'App/Stores/ProblemSolver/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { viewHistoricProblem, viewNewProblem } from './ProblemSolverSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(ProblemSolverTypes.VIEW_HISTORIC_PROBLEM, viewHistoricProblem),
    takeLatest(ProblemSolverTypes.VIEW_NEW_PROBLEM, viewNewProblem)
  ])
}
