import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { LuncheonetteInfoCard } from "../components/luncheonette-info-card.component";
// using the style-component to create component that are already styled.
const Search = styled.View`
  padding: 16px;
`;
const List = styled.View`
  padding: 16px;
  flex: 1;
  background-color: blue;
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const LuncheonetteScreen = () => (
  <SafeArea>
    <Search>
      <Searchbar />
    </Search>
    <List>
      <LuncheonetteInfoCard />
    </List>
  </SafeArea>
);
