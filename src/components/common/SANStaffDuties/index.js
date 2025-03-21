import {
  Block,
  Pressable,
  Text,
  Icon,
  ModalSANStaffDo,
  ModalSANStaffNotPerform,
} from '@components';
import {width} from '@responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '@theme';
import {useState} from 'react';
export default function SANStaffDuties({top}) {
  const [doWork, setDoWork] = useState(0);
  const [notWork, setNotWork] = useState(0);
  return (
    <Block marginTop={top}>
      <Pressable
        onPress={() => setDoWork(!doWork)}
        paddingBottom={23}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block marginLeft={15} marginTop={15} marginRight={8} row>
          <Icon
            IconType={FontAwesome}
            iconName={'check-circle'}
            iconSize={30.6}
            iconColor={COLORS.green6}
          />
          <Text
            fontSize={15}
            medium
            marginLeft={10.3}
            color={COLORS.black6}
            numberOfLines={2}
            width={width - 103}>
            Nhân viên của SAN sẽ thực hiện những công việc gì?
          </Text>
        </Block>
        <Block absolute top={17} right={8}>
          <Icon
            IconType={MaterialIcons}
            iconName={'keyboard-arrow-right'}
            iconColor={COLORS.black6}
            iconSize={22}
          />
        </Block>
      </Pressable>
      <Pressable
        onPress={() => setNotWork(!notWork)}
        marginTop={12}
        paddingBottom={23}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block marginLeft={15} marginTop={15} marginRight={8} row>
          <Icon
            IconType={FontAwesome}
            iconName={'times-circle'}
            iconSize={30.6}
            iconColor={COLORS.red4}
          />
          <Text
            fontSize={15}
            medium
            marginLeft={10.3}
            color={COLORS.black6}
            numberOfLines={2}
            width={width - 103}>
            Nhân viên của SAN sẽ không thực hiện những công việc gì?
          </Text>
        </Block>
        <Block absolute top={17} right={8}>
          <Icon
            IconType={MaterialIcons}
            iconName={'keyboard-arrow-right'}
            iconColor={COLORS.black6}
            iconSize={22}
          />
        </Block>
      </Pressable>
      <ModalSANStaffDo visible={doWork} close={() => setDoWork(false)} />
      <ModalSANStaffNotPerform
        visible={notWork}
        close={() => setNotWork(false)}
      />
    </Block>
  );
}
