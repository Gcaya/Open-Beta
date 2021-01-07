import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import ProblemHistoryItem from './ProblemHistoryItem' 
import { connect } from 'react-redux'
import Moment from 'moment'
import Uuid from 'react-native-uuid'
import ProblemSolverActions from 'App/Stores/ProblemSolver/Actions'
import styles from './ProblemsHistoryStyle'

const ProblemsHistory = ({dispatch}) => {

    const DATA = [
        {
            id: Uuid.v4(),
            title: 'First Item',
            date: Moment().subtract(1, 'days').calendar(),
        },
        {
            id: Uuid.v4(),
            title: 'Second Item',
            date: Moment().subtract(8, 'days').calendar(),
        },
        {
            id: Uuid.v4(),
            title: 'Third Item',
            date: Moment().calendar(),
        },
        {
            id: Uuid.v4(),
            title: 'Fourth Item',
            date: Moment().calendar(),
        },
    ];

    const handleItemPressed = (id) => {
        dispatch(ProblemSolverActions.viewHistoricProblem(id))
    };

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
            <ProblemHistoryItem
                id={item.id}
                title={item.title}
                date={item.date}
                onPressHandler={handleItemPressed}
            />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
}

export default connect(
    null,
    null
)(ProblemsHistory)
