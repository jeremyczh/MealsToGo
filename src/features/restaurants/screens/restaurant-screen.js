import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";

const SafeView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeView>
      <SearchbarContainer>
        <Searchbar placeholder="Search" />
      </SearchbarContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeView>
  );
};
