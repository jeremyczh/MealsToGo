import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 5px;
  width: 150px;
  height: 130px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 5px;
  width: 150px;
  height: 130px;
`;

const Item = styled.View`
  max-width: 150px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <TouchableOpacity>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Spacer position="bottom" size="medium" />
        <Text varant="caption">{restaurant.name}</Text>
      </TouchableOpacity>
    </Item>
  );
};
