import React, { useState } from 'react'
import { View, SafeAreaView, Button } from 'react-native'
import { Helpers } from 'App/Theme'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import ProblemsHistory from './ProblemsHistory'

export default MainMenuScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <SafeAreaView style={[Helpers.fullSize, Helpers.mainSpaceBetween]}>
            <View style={[Helpers.row, Helpers.rowCenter]}>
                <ProblemsHistory />
                {/* {selectedIndex == 0 ? <ProblemsHistory /> : <ProblemSolver />} */}
            </View>
            {/* <View>
                <BottomNavigation selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                    <BottomNavigationTab title='Home' />
                    <BottomNavigationTab title='Solver' />
                </BottomNavigation>
            </View> */}
        </SafeAreaView>
    );
}
