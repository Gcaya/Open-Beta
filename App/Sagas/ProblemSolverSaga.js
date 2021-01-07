import { put, call } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import ProblemSolverActions from 'App/Stores/ProblemSolver/Actions'


export function* viewHistoricProblem(id){
    NavigationService.navigate('CameraScreen');
}

export function* viewNewProblem(data) {
    yield put(ProblemSolverActions.setProblemData(data.data));

    NavigationService.navigate('ProblemSolverScreen');
}
