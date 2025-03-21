import React, {useState} from 'react';
import {Block, HeaderTitle, Icon, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const faqs = [
  {
    question: 'Ứng dụng SAN là gì ?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1",
  },
  {
    question: 'Cách sử dụng ứng dụng SAN?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1",
  },
];

export default function TheQuestion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Câu hỏi thường gặp'} canGoBack />
      <Block marginTop={15} marginLeft={12} width={width - 24}>
        {faqs.map((faq, index) => (
          <Block
            key={index}
            marginBottom={12}
            paddingVertical={12}
            paddingHorizontal={12}
            radius={8}
            backgroundColor={COLORS.white}>
            <Block row>
              <Text
                fontSize={15}
                semiBold
                color={expandedIndex === index ? COLORS.red4 : COLORS.black1}
                marginTop={6}>
                {faq.question}
              </Text>
              <Pressable
                onPress={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                absolute
                right={0}
                width={34}
                height={34}
                radius={50}
                backgroundColor={COLORS.placeholderOpacity}>
                <Icon
                  IconType={MaterialIcons}
                  iconName={
                    expandedIndex === index
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  iconColor={
                    expandedIndex === index ? COLORS.red4 : COLORS.black1
                  }
                  iconSize={34}
                />
              </Pressable>
            </Block>
            {expandedIndex === index && (
              <Text fontSize={14} regular color={COLORS.black1} marginTop={19}>
                {faq.answer}
              </Text>
            )}
          </Block>
        ))}
      </Block>
    </Block>
  );
}
