import {PermissionsAndroid, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestImagePermission = async () => {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  } else if (Platform.OS === 'ios') {
    const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    const status = await check(permission);
    if (status === RESULTS.DENIED || status === RESULTS.LIMITED) {
      const granted = await request(permission);
      return granted === RESULTS.GRANTED || granted === RESULTS.LIMITED;
    }
    return status === RESULTS.GRANTED || status === RESULTS.LIMITED;
  }
  return true;
};
