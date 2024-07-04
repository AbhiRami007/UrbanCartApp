// components/card-component.js
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Card } from "react-native-paper";

const CardComponent = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={item.image} />
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>{item.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
    width: width / 2 - 10, // Adjust width for two columns and account for margin
  },
  card: {
    width: "100%",
  },
});

export default CardComponent;
