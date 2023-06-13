// export const AnimatedHeaderForCategoryScreen: FC<
//   HeaderProps & { scrollX: Animated.Value }
// > = ({ headerTitle = 'appetizers', link, scrollX }) => {
//   const router = useRouter()
//
//   const useRandomColor = () => {
//     const { boldPink, brightYellow, freshGreen, magentaPink, vibrantOrange } =
//       Colors.light
//     const myColors = [
//       brightYellow,
//       vibrantOrange,
//       boldPink,
//       freshGreen,
//       magentaPink,
//       vibrantOrange,
//     ]
//
//     return myColors[Math.floor(Math.random() * 4)]
//   }
//
//   const randomColor = useRandomColor()
//
//   return (
//     // <UnSafeAreaBox>
//     <AnimatedStyledView
//       style={{
//         height: scrollX.interpolate({
//           inputRange: [0, 500],
//           outputRange: [200, 60],
//           extrapolateRight: 'clamp',
//           extrapolateLeft: 'clamp',
//           easing: Easing.in(Easing.linear),
//         }),
//         gap: 5,
//       }}
//       bgColor={randomColor}>
//       <StatusBar translucent backgroundColor={randomColor} />
//       <AnimatedHStack
//         px={3}
//         py={2}
//         width={Dimensions.get('window').width}
//         alignItems={'center'}
//         justifyContent={'space-between'}>
//         <TouchableOpacity
//           onPress={(_event) => (link ? router.push(link) : router.back())}>
//           <AntDesign
//             name="arrowleft"
//             size={22}
//             color={theme.colors.blueGray['50']}
//           />
//         </TouchableOpacity>
//         {/*<RubikMediumText*/}
//         {/*  textAlign={'center'}*/}
//         {/*  color={theme.colors.blueGray['50']}*/}
//         {/*  fontSize={'md'}>*/}
//         {/*  {headerTitle}*/}
//         {/*</RubikMediumText>*/}
//         <AntDesign name="arrowright" size={24} color={'transparent'} />
//       </AnimatedHStack>
//       <Box px={4}>
//         <RubikMediumText
//           // textAlign={'center'}
//           color={theme.colors.blueGray['50']}
//           fontSize={'2xl'}>
//           {headerTitle}
//         </RubikMediumText>
//       </Box>
//     </AnimatedStyledView>
//     // {/*</UnSafeAreaBox>*/}
//   )
// }
