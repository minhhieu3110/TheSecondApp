import SelectDropdown from 'react-native-select-dropdown';
import {Block, Text, Icon} from '@components';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '@theme';
import {StyleSheet, View} from 'react-native';

const SelectDrop = ({
  data = [],
  placeholder,
  width,
  height,
  onSelect,
  search,
  defaultValue,
}) => {
  return (
    <SelectDropdown
      onBlur={false}
      search={search}
      data={data}
      onSelect={onSelect}
      defaultValue={defaultValue}
      renderButton={selectedItem => {
        return (
          <View style={[styles.dropdownButtonStyle, (width = width)]}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem?.value) ||
                selectedItem?.title ||
                placeholder}
            </Text>

            <Icon
              IconType={Feather}
              iconName="chevron-down"
              iconColor={COLORS.gray12}
            />
          </View>
        );
      }}
      renderItem={(item, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && {backgroundColor: '#D2D9DF'}),
            }}>
            <Text style={styles.dropdownItemTxtStyle}>
              {item?.value || item?.title}
            </Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    height: 41,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black2,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
export default SelectDrop;
