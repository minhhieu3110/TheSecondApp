import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
// interface HeaderProps {
//   title: string;
//   icon?: string; // Name of Ionicons icon
//   showBack?: boolean;
// }

const HeaderTitle = ({title, icon, showBack = true}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      )}

      <View style={styles.titleContainer}>
        {icon && (
          <Icon
            name="chevron-back"
            size={30}
            color="black"
            style={styles.icon}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HeaderTitle;
