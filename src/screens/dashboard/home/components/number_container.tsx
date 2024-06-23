import { yupResolver } from '@hookform/resolvers/yup';
import Icon from '@root/src/assets/icons/icon';
import {
  AppFlatListBottomSheet,
  AppText,
  Box,
  Gap,
  Input,
  Row,
} from '@root/src/components';
import Toast from '@root/src/components/app_snackbar';
import AppContacts from '@root/src/config/device_features/contact';
import { getComputedHeight } from '@root/src/design_system/layout/responsiveness';
import { useAppTheme } from '@root/src/design_system/theme/theme';
import { useBottomModalRef } from '@root/src/hooks/bottomsheet';
import { contactValidation } from '@root/src/utils/validators';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet } from 'react-native';
import { Contact } from 'react-native-contacts';

function PhoneNumberContainer({
  width,
  phoneNumber,
  onSelectPhoneNumber,
}: {
  width?: number;
  phoneNumber: string;
  onSelectPhoneNumber(phoneNumber: string): void;
}) {
  const { colors } = useAppTheme();
  const [ref, { open, close, closeAll }] = useBottomModalRef();
  const [userContacts, setUserContacts] = useState<Contact[] | undefined>();
  const { control, watch, reset } = useForm({
    resolver: yupResolver(contactValidation),
  });
  let immmutableContacts: Contact[] | undefined;

  watch(({ contact }, { }) => {
    //TODO: FIX THIS FUNCTION 
    //TODO: AND REPLACE THE WHOLE METHOD WRITTEN  

    //  const res = HomeScreenHelperFunctions.searchContacts({searchInput: contact!, contactList: immmutableContacts!});
    //  console.log('RESPO FUNCTION', res);
    //  setUserContacts(res);
    const hasDigits = /^[0-9]+$/;
    if (!hasDigits.test(contact ?? '')) {
      const searchedContacts = immmutableContacts?.filter(userContact =>
        (userContact?.displayName ?? "")
          ?.toLowerCase()
          ?.includes((contact ?? '')?.toLowerCase()),
      );
      if ((searchedContacts ?? [])?.length > 0)
        setUserContacts(searchedContacts);
    } else {
      const searchedContacts = userContacts?.filter(userContact =>
        userContact.phoneNumbers.find(phone =>
          phone.number.includes(contact ?? ''),
        ),
      );
      if ((searchedContacts ?? [])?.length > 0)
        setUserContacts(searchedContacts);
      else
        setUserContacts([
          { displayName: 'Select', phoneNumbers: [{ number: contact }] },
        ]);
    }
  });
  return (
    <>
      <Pressable
        onPress={async () => {
          AppContacts.readUsersContacts({
            onSuccess: (contacts: Contact[]) => {
              console.log('ON SUCCESS CALLED', contacts)
              if (contacts !== null) {
                open();
                setUserContacts(contacts);
                immmutableContacts = contacts;

              }
              else {
                Toast.showErrorSnackBar({ text: 'Denny requires permission to view contacts' })
              }
            }
          });
        }}>
        <Row
          width={width ?? '100%'}
          height={getComputedHeight(56)}
          borderRadius={20}
          paddingHorizontal={18}
          alignContent="center"
          justifyContent="space-between"
          backgroundColor={colors.white}>
          <AppText text={phoneNumber} weight="large" color={colors.black} />
          <Icon name="profile-green" />
        </Row>
      </Pressable>
      <AppFlatListBottomSheet
        ref={ref}
        title="Select Contact"
        data={userContacts ?? []}
        snaps={['50%', '60%', '80%']}
        flatListContainerStyle={style.container}
        //TODO: CHANGE TO A UNIQUE ID
        keyExtractor={(item: Contact) => `${item.phoneNumbers[0]}+${Math.random() + new Date().getUTCMilliseconds() + new Date().getSeconds()}`}
        ListHeaderComponent={() => { }}
        renderItem={({ item, index }: { item: Contact; index: number }) => {
          return (
            <Pressable
              onPress={() => {
                /* THIS SELECTS THE FIRST NUMBER IN THE CONTACT LIST */
                const result = item.phoneNumbers[0].number;
                /* 
                THIS WOULD REMOVE ALL WHITE SPACES 
                IN THE PHONE NUMBER 
                */
                const phoneNumber = result.replaceAll(' ', '').replaceAll('-', '').replaceAll('(', '').replaceAll(')', '');
                console.log("SELECTED PHONE", phoneNumber)
                onSelectPhoneNumber(phoneNumber);
                closeAll();
                reset();
              }}>
              <Box {...style.contactBox}>
                <AppText
                  text={item.displayName}
                  weight="big"
                  color={colors.primary}
                />
                <AppText
                  text={item.phoneNumbers[0].number}
                  weight="bigger"
                  color="black"
                />
              </Box>
            </Pressable>
          );
        }}
        itemSeperator={() => (
          <>
            <Gap height={getComputedHeight(10)} />
            <Box {...style.divider}>
              <></>
            </Box>
            <Gap height={getComputedHeight(10)} />
          </>
        )}>
        {/* SEARCH BOX */}
        <>
          <Input
            control={control}
            label="Search contacts"
            name="contact"
            iconName="search-icon"
            backgroundColor={colors.white}
          />
          {/* THIS ADDS SPACING BETWEEN THE SEARCH BOX AND THE DATA BELOW */}
          <Gap height={getComputedHeight(24)} />
        </>
      </AppFlatListBottomSheet>
    </>
  );
}

export default PhoneNumberContainer;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
  },
  divider: {
    borderWidth: 0.4,
    width: '96%',
    alignSelf: 'center',
  },
  contactBox: {
    rowGap: 4,
  },
});
