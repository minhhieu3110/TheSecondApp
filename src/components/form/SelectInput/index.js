import {Block} from '@components';
import {COLORS} from '@theme';
import {Dropdown} from 'react-native-element-dropdown';

const SelectInput = ({
  data = [],
  width,
  height,
  placeholder,
  onChange,
  value,
  labelField = 'value',
  valueField = 'code',
  keyword,
  top,
}) => {
  return (
    <Block
      width={width}
      backgroundColor={COLORS.white}
      height={height}
      borderWidth={0.5}
      borderColor={COLORS.placeholder}
      marginTop={top}
      radius={5}>
      <Dropdown
        data={data}
        searchField={keyword}
        iconStyle={{width: 20, height: 20, marginTop: 10}}
        placeholder={placeholder}
        placeholderStyle={{
          color: COLORS.placeholder,
          marginLeft: 12,
          marginTop: 14,
          fontSize: 14,
          fontWeight: 'regular',
        }}
        selectedTextStyle={{
          color: COLORS.black2,
          marginLeft: 12,
          marginTop: 14,
          fontSize: 14,
          fontWeight: 'regular',
        }}
        labelField={labelField}
        valueField={valueField}
        onChange={onChange}
        inputSearchStyle={{height: 40}}
        search
        searchPlaceholder="Tìm kiếm..."
        value={value}
      />
    </Block>
  );
};
export default SelectInput;
