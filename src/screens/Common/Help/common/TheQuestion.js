import React, {useEffect, useState} from 'react';
import {
  Block,
  HeaderTitle,
  Icon,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import RenderHTML from 'react-native-render-html';

export default function TheQuestion() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_FAQ, params: {is_paginate: 0, type: 'user'}});
  }, [dispatch]);
  const faq = useSelector(state => state.getFAQ?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Câu hỏi thường gặp'} canGoBack />
      <ScrollView>
        <Block marginTop={15} marginLeft={12} width={width - 24}>
          {faq.map((faq, index) => (
            <Block
              key={index}
              marginBottom={12}
              paddingVertical={12}
              paddingHorizontal={12}
              radius={8}
              backgroundColor={COLORS.white}>
              <Block row>
                <Block width={width - 80}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={
                      expandedIndex === index ? COLORS.red4 : COLORS.black1
                    }
                    marginTop={6}>
                    {faq.title}
                  </Text>
                </Block>
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
                <RenderHTML
                  contentWidth={width - 24}
                  source={{html: faq.content}}
                  tagsStyles={{
                    p: {
                      fontSize: 14,
                      color: COLORS.black1,
                      fontFamily: FONTS.regular,
                      marginTop: 19,
                      lineHeight: 22,
                    },
                  }}
                />
              )}
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}
