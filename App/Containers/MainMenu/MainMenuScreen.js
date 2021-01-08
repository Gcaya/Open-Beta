import React, { useState } from 'react'
import { View, SafeAreaView, Button } from 'react-native'
import { Helpers } from 'App/Theme'
import { Icon, Layout, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components'
import ProblemsHistory from './ProblemsHistory'

export default MainMenuScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back'/>
      );
      
    const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
    );

    return (
        <SafeAreaView style={[Helpers.fullSize]}>
            <View>
                <TopNavigation
                    alignment='center'
                    title='Open Beta'
                    accessoryLeft={renderBackAction}
                />
                <Divider />
            <ProblemsHistory />
            </View>
        </SafeAreaView>
    );
}


  