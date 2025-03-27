import {icon} from '@assets';
import {Block, Image} from '@components';
import React from 'react';

const dataRank = [{id: 5}, {id: 4}, {id: 3}, {id: 2}, {id: 1}];

const RankStar = ({value, size, width, top}) => {
  return (
    <Block rowCenter spaceBetween width={width} marginTop={top}>
      {dataRank?.map((i, idx) => {
        return (
          <Block key={idx} rowCenter flexGrow>
            <Image
              source={value >= idx + 1 ? icon.icon_star : icon.icon_star_dis}
              height={size || 10}
              width={size || 10}
            />
          </Block>
        );
      })}
    </Block>
  );
};

export default RankStar;
