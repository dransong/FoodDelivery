import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/space.component";
import { Text } from "../../../components/typography/text.component";
import {
  LunchCardCover,
  Info,
  Section,
  Rating,
  OpenSection,
  Address,
  Icon,
  LunchCard,
} from "./luncheonette-info-card.style";

export const LuncheonetteInfoCard = ({ luncheonette = {} }) => {
  const {
    name = "Luncheonette",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.africashopzone.com/wp-content/uploads/2019/09/banku-1-1024x732.jpg",
    ],
    address = "10 bla bla",
    isOpenedNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = luncheonette;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <LunchCard elevation={5}>
        <LunchCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <OpenSection>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenedNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </OpenSection>
          </Section>
          <Address>{address}</Address>
        </Info>
      </LunchCard>
    </>
  );
};
