import { Text } from 'native-base';
import { FC, PropsWithChildren } from 'react';
import { TextProps } from '../types/text';

const RubikText: FC<PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  return (
    <Text fontFamily={'Rubik'} {...props}>
      {children}
    </Text>
  );
};

export default RubikText;
