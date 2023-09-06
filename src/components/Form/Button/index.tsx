import React from "react";
import { Container, Title } from "./styles";
import { Touchable, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export const Button: React.FunctionComponent<ButtonProps> = ({title, ...otherProps}) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  )
}
