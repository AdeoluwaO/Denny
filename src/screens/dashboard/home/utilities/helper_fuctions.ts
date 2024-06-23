import { initialLetterToUppercase } from '@root/src/config/helpers/helper_functions';
import {Contact} from 'react-native-contacts';

export class HomeScreenHelperFunctions {
  static searchContacts({
    searchInput,
    contactList,
  }: {
    searchInput: string;
    contactList: Contact[];
  }): Contact[] {
    let searchedContacts: Contact[] = [];
    const hasDigits = /^[0-9]+$/;
    if (!hasDigits.test(searchInput ?? '')) {
      const list = contactList?.filter(userContact =>
        userContact?.displayName
          ?.toLocaleLowerCase()
          .includes((searchInput ?? '')?.toLocaleLowerCase()),
      );
      if ((list ?? [])?.length > 0) searchedContacts = list;
    } else {
      const list = contactList?.filter(userContact =>
        userContact.phoneNumbers.find(phone =>
          phone.number.includes(searchInput ?? ''),
        ),
      );
      if ((list ?? [])?.length > 0) searchedContacts = list;
      else
        searchedContacts = [
          {displayName: 'Select', phoneNumbers: [{number: searchInput}]},
        ];
    }
    return searchedContacts;
  }
}

export function getServiceDropdownTitleWithService(servce: string) {
  if (servce === 'transactions') return initialLetterToUppercase('all');
  else return initialLetterToUppercase(servce);
}
