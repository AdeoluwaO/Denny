import { PermissionsAndroid, Platform, Linking } from 'react-native';
import Contacts from 'react-native-contacts';
import { PERMISSIONS, check, request, RESULTS } from 'react-native-permissions';
import { openSettings } from '../internals/link';

export default class AppContacts {
  static async readUsersContacts({ onSuccess }) {
    /*
      WHEN A USER DEINES PERMISSION AND REQUESTS AGAIN THE
     USER MUST GRANT PERMISSION IN DEVICE SETTINGS
     */
    const result = await Platform.select({ ios: check(PERMISSIONS.IOS.CONTACTS), android: check(PERMISSIONS.ANDROID.READ_CONTACTS) })
    if (result === RESULTS.BLOCKED)
      openSettings();
    if (Platform.OS === 'android') {
      const response = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'Denny would like to view your contacts',
          buttonPositive: 'Accept',
          buttonNegative: 'Deny',
        },
      );
      if (response === RESULTS.GRANTED) {
        const contacts = await Contacts.getAll();
        onSuccess(contacts)
        return contacts;
      };
    } else {
      const response = await request(PERMISSIONS.IOS.CONTACTS);
      if (response === RESULTS.GRANTED) {
        const contacts = await Contacts.getAll();
        console.log('PHONE BOOK CONTACTS ARE', contacts);
        onSuccess(contacts)
        return contacts;
      } else {
        return null;
      }
    }
  }

}
