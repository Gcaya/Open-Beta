import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './ProblemSolverStyle'

const ProblemSolverScreen = ({dispatch, problem}) => {

    return (
        <View>
            <Image
                style={styles.logo}
                source={{uri: problem.data}}
            />
        </View>
    );
}



const mapStateToProps = (state) => ({
    problem: state.problemSolver.problem,
})

export default connect(
    mapStateToProps,
    null
)(ProblemSolverScreen)