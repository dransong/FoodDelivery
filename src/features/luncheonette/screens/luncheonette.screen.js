import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { LuncheonetteInfoCard } from "../components/luncheonette-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
// using the style-component to create component that are already styled.
const Search = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const LuncheonetteList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LuncheonetteScreen = () => (
  <SafeArea>
    <Search>
      <Searchbar />
    </Search>
    <LuncheonetteList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <LuncheonetteInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
