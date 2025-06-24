import React, {useRef, useEffect, useState} from 'react';
import {ScrollView, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Block, Image} from '@components';
import {width} from '@responsive';

const CarouselThumbnail = ({
  data = [],
  autoPlayInterval = 3000,
  onChangeIndex,
}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      scrollToIndex(nextIndex);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  const scrollToIndex = index => {
    scrollRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
    if (index !== activeIndex) {
      setActiveIndex(index);
      onChangeIndex?.(index);
    }
  };

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    if (index !== activeIndex) {
      setActiveIndex(index);
      onChangeIndex?.(index);
    }
  };

  // 👉 Chuyển đổi `string` (uri) sang object `source`
  const getImageSource = item => {
    if (typeof item === 'string') {
      return {uri: item};
    }
    return item; // assume require()
  };

  return (
    <Block>
      {/* Carousel chính */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {data.map((item, index) => (
          <Image
            key={index}
            source={getImageSource(item)}
            width={width}
            height={width}
          />
        ))}
      </ScrollView>

      {/* Thumbnail */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        style={{marginTop: 10, paddingVertical: 12}}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => scrollToIndex(index)}>
            <Image
              source={getImageSource(item)}
              style={[
                styles.thumbnail,
                index === activeIndex && styles.activeThumbnail,
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 74,
    height: 73,
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 0,
  },
  activeThumbnail: {
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default CarouselThumbnail;
