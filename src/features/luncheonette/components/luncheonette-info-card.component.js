import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

const Name = styled.Text`
  padding: 16px;
  color: white;
`;

export const LuncheonetteInfoCard = ({ luncheonette = {} }) => {
  const {
    name = "Luncheonette",
    icon,
    photos = [
      "https://www.africashopzone.com/wp-content/uploads/2019/09/banku-1-1024x732.jpg",
    ],
    address = "10 bla bla",
    isopenedNow = true,
    rating = 3,
    isClosedTemporarily,
  } = luncheonette;

  return (
    <>
      <Card elevation={5}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
      <Name> Trying styled component</Name>
    </>
  );
};

const styles = StyleSheet.create({
  cover: { padding: 15, backgroundColor: "white" },
});
