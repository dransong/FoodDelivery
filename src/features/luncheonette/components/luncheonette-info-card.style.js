import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const LunchCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const LunchCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const OpenSection = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const Address = styled.Text`
  font_family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
