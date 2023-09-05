import React from "react";
import { Container, Header, Icon, UserAvatar, UserAvatarButton, UserGreeting, UserInfo, UserInfoDetail, UserName, UserWrapper} from "./styles";

import avatarDefault from '../../assets/avatar02.png'

export const Home: React.FunctionComponent = () => {
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => 'ola'}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vanderlei</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>

      </Header>
    </Container>
    );
};

