import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './ProblemHistoryItemStyle'
import { Fonts } from 'App/Theme'


export default ProblemHistoryItem = ({id, title, date, onPressHandler}) => {

    const onPress = () => onPressHandler(id);

    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <View>
                <Text>{title}</Text>
                <Text style={[styles.subItem, Fonts.tiny]}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
}