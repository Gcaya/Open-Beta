import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        width: 72,
        height: 72,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 50,
      },
});