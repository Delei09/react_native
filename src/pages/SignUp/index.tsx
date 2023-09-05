import React from "react";
import { BackToSignIn, BackToSignInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import logo from '../../assets/logo.png'
import { useNavigation } from "@react-navigation/native";

interface ScreenNavigationProp{
  goBack: () => void
}

export const SignUp: React.FunctionComponent = () => {

  const navigate = useNavigation<ScreenNavigationProp>()
  return(
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={Platform.OS === 'ios' ? "padding" : undefined}>
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex:1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <Input placeholder="Nome Completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Criar conta" />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => {navigate.goBack()}}>
        <Icon name='arrow-left' />
        <BackToSignInTitle>Voltar para login</BackToSignInTitle>
      </BackToSignIn>
  </KeyboardAvoidingView>
  );
};
