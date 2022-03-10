import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Spacer position="bottom" size="large">
        <Spacer position="left" size="medium">
          <Spacer position="bottom" size="medium">
            <Text variant="caption">Favourites</Text>
          </Spacer>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name;

            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </Spacer>
    </FavouritesWrapper>
  );
};
