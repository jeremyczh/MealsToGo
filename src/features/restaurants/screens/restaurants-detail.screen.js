import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import { SafeView } from "../../../components/utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [lunchExpanded, setLunchExpanded] = useState(true);
  const [dinnerExpanded, setDinnerExpanded] = useState(true);
  const [drinksExpanded, setDrinksExpanded] = useState(true);

  return (
    <SafeView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Cheeseburger" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Cheeseburger" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Cheeseburger" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          left={(props) => <List.Icon {...props} icon="bottle-wine" />}
        >
          <List.Item title="Red Wine" />
          <List.Item title="Mojito" />
        </List.Accordion>
      </ScrollView>
    </SafeView>
  );
};
