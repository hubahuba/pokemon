import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageButtonProps} from '~atoms/ImageButton/ImageButton';
import {memo} from 'react';

const ImageButton = memo(function ImageButton(props: ImageButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <FastImage
        resizeMode="contain"
        style={{width: 120, height: 120}}
        source={props.source}
      />
    </TouchableOpacity>
  );
});

export default ImageButton;
