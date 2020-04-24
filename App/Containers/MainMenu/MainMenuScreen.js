import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'


export default class MainMenuScreen extends React.Component {
    render() {
        return (
            <View>
                <View style={[Helpers.rowCenter, ApplicationStyles.background]}>
                    <Button title="Problem solver" />
                </View>
            </View>
        );
    }
}

//export default connect()(MainMenuScreen)