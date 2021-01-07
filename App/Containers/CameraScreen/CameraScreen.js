import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Icon } from 'react-native-elements'
import { Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import ProblemSolverActions from 'App/Stores/ProblemSolver/Actions'
import styles from './CameraScreenStyle'
    
const CameraScreen = ({dispatch}) => {

    const takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.base64);
        dispatch(ProblemSolverActions.viewNewProblem(data.uri));
    };

    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                    captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
            {({ camera, status }) => {
                if (status !== 'READY') return <PendingView />;
                return (
                  <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={() => takePicture(camera)} style={[styles.capture, Helpers.center]}>
                          <Icon name='camera' size={64} />
                      </TouchableOpacity>
                  </View>
                );
            }}
            </RNCamera>
      </View>
    );
}

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default connect(
  null,
  null
)(CameraScreen)