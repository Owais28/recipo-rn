import { Text } from 'native-base';
import { FC, PropsWithChildren } from 'react';
import { TextProps } from '../types/text';

const RubikSemiBoldText: FC<PropsWithChildren<TextProps>> = ({ children, ...props }) => {
  return (
    <Text fontFamily={'Rubik-SemiBold'} {...props}>
      {children}
    </Text>
  );
};

export default RubikSemiBoldText;
