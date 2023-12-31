import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)};
  font-family: ${({theme}) => theme.fonts.bold};
  font-weight: bold;
  background-color: ${({theme}) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)};
`;


export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)};
  height: ${RFValue(52)};
  border-radius: 10px;
`;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color:  ${({theme}) => theme.colors.gray800};
  font-size: ${RFValue(18)};
  font-family: ${({theme}) => theme.fonts.regular};
  `
export const UserName = styled.Text`
  color:  ${({theme}) => theme.colors.gray800};
  font-size: ${RFValue(18)};
  font-weight: bold;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.dark};
`
