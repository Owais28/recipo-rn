import { Text } from 'native-base';
import { FC, PropsWithChildren } from 'react';
import { TextProps } from '../types/text';

const RubikBoldText: FC<PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  return (
    <Text fontFamily={'Rubik-Bold'} {...props}>
      {children}
    </Text>
  );
};

export default RubikBoldText;
