import {Block, HeaderTitle, Pressable, StatusBar, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS, FONTS} from '@theme';
// import {bottomRoot} from 'navigation/navigationRef';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTransaction from './common/AllTransaction';
import Recharge from './common/Recharge';
import WithDraw from './common/Withdraw';
import UseService from './common/UseService';
import {useState} from 'react';

export default function History() {
  // const Tab = createMaterialTopTabNavigator();
  const title = [
    {id: 1, title: 'Tất cả'},
    {id: 2, title: 'Nạp'},
    {id: 3, title: 'Rút'},
    {id: 4, title: 'Sử dụng'},
  ];
  const [allTransaction, setAllTransaction] = useState(true);
  const [recharge, setRecharge] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [useService, setUseService] = useState(false);
  const handleHistory = title => {
    setAllTransaction(false);
    setRecharge(false);
    setWithdraw(false);
    setUseService(false);
    if (title === 'Tất cả') setAllTransaction(true);
    if (title === 'Nạp') setRecharge(true);
    if (title === 'Rút') setWithdraw(true);
    if (title === 'Sử dụng') setUseService(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block width={width} height={93} backgroundColor={COLORS.white}>
        <HeaderTitle
          background
          canGoBack
          title={'Lịch sử'}
          colorIcon={COLORS.black1}
          colorText={COLORS.black1}
        />
        <Block
          marginTop={63}
          width={width - 24}
          height={30}
          marginHorizontal={12}
          row>
          {title.map(item => (
            <Pressable
              onPress={() => handleHistory(item.title)}
              key={item.id}
              width={(width - 24) / 4}
              height={30}
              alignCenter
              spaceBetween>
              <Text
                fontSize={15}
                regular
                color={
                  (allTransaction && item.title === 'Tất cả') ||
                  (recharge && item.title === 'Nạp') ||
                  (withdraw && item.title === 'Rút') ||
                  (useService && item.title === 'Sử dụng')
                    ? COLORS.red4
                    : COLORS.black1
                }>
                {item.title}
              </Text>
              <Block
                height={2}
                width={'100%'}
                backgroundColor={
                  (allTransaction && item.title === 'Tất cả') ||
                  (recharge && item.title === 'Nạp') ||
                  (withdraw && item.title === 'Rút') ||
                  (useService && item.title === 'Sử dụng')
                    ? COLORS.red4
                    : ''
                }
              />
            </Pressable>
          ))}
        </Block>
      </Block>
      {allTransaction && <AllTransaction />}
      {recharge && <Recharge />}
      {withdraw && <WithDraw />}
      {useService && <UseService />}
    </Block>
  );
}
