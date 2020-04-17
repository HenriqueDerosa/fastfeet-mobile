import React, { useCallback } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import colors from '~/utils/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '~/services/api'

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
)

export default () => {
  const takePicture = useCallback((camera) => {
    const take = async () => {
      const options = { quality: 0.5, base64: true }
      const { uri, type, originalname } = await camera.takePictureAsync(options)

      const formData = new FormData()
      formData.append('file', {
        uri,
        type,
        name: originalname,
      })
      try {
        const response = await api.post('files', formData)
        console.log(response.data)
      } catch (err) {
        console.log('ERROR')
        console.log(err)
        console.log('.')
      }
    }

    take()
  }, [])

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />
          return (
            <View>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Icon name="camera" size={32} color={colors.whiteLilac} />
              </TouchableOpacity>
            </View>
          )
        }}
      </RNCamera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    margin: 20,
  },
})
