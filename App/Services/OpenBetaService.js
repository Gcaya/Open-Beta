import axios from 'axios'
import { Config } from 'App/Config'

const openBetaApiClient = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: Config.API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
})

function getProblem(id) {

}

function addProblem() {

}

function setProblem() {

}

export const OpenBetaService = {
  getProblem,
  addProblem,
  setProblem,
}