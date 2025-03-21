import {COLORS} from '@theme';
import React, {useEffect, useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';

const Switch = ({
  value,
  onValueChange,
  trackColor = {false: '#767577', true: '#81b0ff'},
  thumbColor = {false: '#f4f3f4', true: '#f5dd4b'},
  width = 50,
  height = 30,
  thumbSize = 25,
  padding = 2,
}) => {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
  const trackPadding = Math.min(padding, (width - thumbSize) / 2);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [value, animatedValue]);

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [trackPadding, width - thumbSize - trackPadding],
  });

  const trackStyle = {
    width,
    height,
    borderWidth: 1,
    borderColor: COLORS.gray12,
    borderRadius: height / 2,
    backgroundColor: trackColor[value],
  };

  const thumbStyle = {
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    backgroundColor: thumbColor[value],
    transform: [{translateX: thumbPosition}],
    top: (height - thumbSize) / 4,
  };

  return (
    <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
      <View style={[styles.track, trackStyle]}>
        <Animated.View style={[styles.thumb, thumbStyle]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  track: {
    position: 'relative',
    backgroundColor: '#767577',
  },
  thumb: {
    position: 'absolute',
    left: 0,
  },
});

export default Switch;
