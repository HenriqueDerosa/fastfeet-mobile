import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import colors from '~/utils/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image, ImageButtons } from './styles'

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

export default ({ image, setImage }) => {
  const takePicture = useCallback((camera) => {
    const take = async () => {
      const options = { base64: true }
      const picture = await camera.takePictureAsync(options)

      console.log('took picture')
      setImage(picture)
    }

    take()
  }, [])

  return (
    <View style={styles.container}>
      {image ? (
        <View>
          <Image source={image} />
          <ImageButtons
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={styles.capture}>
              <Icon name="close" size={32} color={colors.whiteLilac} />
              <Text style={{ color: 'white' }}>Tirar outra foto</Text>
            </TouchableOpacity>
          </ImageButtons>
        </View>
      ) : (
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
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
})
