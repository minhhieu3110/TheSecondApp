import {icon} from '@assets';
import {Block, HeaderTitle, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function MenbershipRank() {
  const [bronze, setBronze] = useState(true);
  const [silver, setSilver] = useState(false);
  const [gold, setGold] = useState(false);
  const [diamon, setDiamon] = useState(false);

  const benefit = [
    {
      title: 'Đồng',
      titleBenefit: 'Hạng đồng',
      icon: `${icon.rank_bronze}`,
    },
    {
      title: 'Bạc',
      titleBenefit: 'Hạng bạc',
      icon: `${icon.rank_silver}`,
    },
    {
      title: 'Vàng',
      titleBenefit: 'Hạng vàng',
      icon: `${icon.rank_gold}`,
    },
    {
      title: 'Kim cương',
      titleBenefit: 'Hạng kim cương',
      icon: `${icon.rank_diamon}`,
    },
  ];
  const handleBenefit = title => {
    setBronze(false);
    setSilver(false);
    setGold(false);
    setDiamon(false);
    if (title === 'Đồng') setBronze(true);
    if (title === 'Bạc') setSilver(true);
    if (title === 'Vàng') setGold(true);
    if (title === 'Kim cương') setDiamon(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Hạng thành viên'} canGoBack />
      <Block
        width={width - 24}
        marginTop={12}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        paddingBottom={12}
        justifyCenter>
        <Block marginTop={15} marginLeft={11} row>
          <Block width={62.37} height={62}>
            <Image source={icon.rank_bronze} width={62.37} height={62} />
          </Block>
          <Block marginLeft={12.8} marginTop={5}>
            <Text fontSize={18} semiBold color={COLORS.black5}>
              Hạng đồng
            </Text>
            <Text fontSize={14} semiBold color={COLORS.red4}>
              3600 điểm
            </Text>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Có hiệu lực đến ngày 31/12/2025
            </Text>
          </Block>
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={12}
          marginTop={15}
          backgroundColor={COLORS.gray11}
        />
        <Block width={width - 44.5} marginTop={14} marginLeft={10}>
          <Block row>
            <Text fontSize={15} semiBold color={COLORS.black5}>
              Tiêu chí
            </Text>
            <Text
              fontSize={15}
              semiBold
              color={COLORS.black5}
              marginLeft={160}
              marginRight={64}>
              Đã đạt
            </Text>
            <Text fontSize={15} semiBold color={COLORS.black5}>
              Lên hạng
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Block row marginTop={17}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Điểm tích luỹ
            </Text>
            <Text
              fontSize={15}
              semiBold
              color={COLORS.red4}
              marginLeft={129}
              marginRight={92}>
              3600
            </Text>
            <Text fontSize={15} regular color={COLORS.black5}>
              1.400
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Pressable
            onPress={() => commonRoot.navigate(router.HISTORY_POINT)}
            marginTop={15}
            row
            width={width - 240.6}
            alignCenter
            marginLeft={99}>
            <Text fontSize={14} regular color={COLORS.red4} center>
              Xem lịch sử điểm thưởng
            </Text>
            <Icon
              IconType={MaterialIcons}
              iconName={'keyboard-arrow-right'}
              iconColor={COLORS.red4}
              marginLeft={23}
            />
          </Pressable>
        </Block>
      </Block>
      <Block
        width={width - 24}
        marginLeft={12}
        marginTop={17}
        radius={8}
        paddingBottom={13}
        backgroundColor={COLORS.white}>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black2}
          marginTop={15}
          marginLeft={13}>
          Quyền lợi thành viên
        </Text>
        <Block
          width={width - 50.5}
          marginTop={20}
          marginLeft={12}
          paddingBottom={11}
          row
          spaceBetween>
          {benefit.map(bene => (
            <Pressable
              onPress={() => handleBenefit(bene.title)}
              width={80}
              height={94}
              justifyCenter
              opacity={
                (bronze && bene.title === 'Đồng') ||
                (silver && bene.title === 'Bạc') ||
                (gold && bene.title === 'Vàng') ||
                (diamon && bene.title === 'Kim cương')
                  ? ''
                  : 0.3
              }
              key={bene.title}>
              <Image source={bene.icon} width={68.66} height={66.71} />
              <Text
                marginTop={12.3}
                fontSize={15}
                regular
                color={COLORS.black5}
                lineHeight={18}
                height={17}
                center>
                {bene.title}
              </Text>
            </Pressable>
          ))}
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={13}
          marginTop={18}
          backgroundColor={COLORS.gray11}
        />
        {bronze && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng đồng
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_bronze} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {silver && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng bạc
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_silver} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {gold && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng vàng
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_gold} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {diamon && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng kim cương
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_diamon} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
      </Block>
    </Block>
  );
}
