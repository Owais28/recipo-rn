import { Text } from 'native-base';
import { FC, PropsWithChildren } from 'react';
import { TextProps } from '../types/text';

const RubikMediumText: FC<PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  return (
    <Text fontFamily={'Rubik-Medium'} {...props}>
      {children}
    </Text>
  );
};

export default RubikMediumText;
