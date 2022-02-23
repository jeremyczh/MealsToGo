import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://static.thenounproject.com/png/2503240-200.png",
    photos = [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ],
    address = "100, Random Str",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Spacer position="bottom" size="large">
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </RestaurantCard>
    </Spacer>
  );
};
