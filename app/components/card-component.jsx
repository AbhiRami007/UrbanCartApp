// components/card-component.js
import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Card } from "react-native-paper";

const CardComponent = ({ item, addToCart }) => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Cover source={item.image} />
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>{item.description}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(item)} />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
  },
  card: {
    width: "100%",
  },
});

export default CardComponent;
