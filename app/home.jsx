import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CardComponent from "./components/card-component";

const HomePage = () => {
  const initialData = [
    {
      id: "1",
      image: require("../assets/avatar.png"),
      title: "Card 1",
      description: "This is the first card",
    },
    {
      id: "2",
      image: require("../assets/favicon.png"),
      title: "Card 2",
      description: "This is the second card",
    },
    {
      id: "3",
      image: require("../assets/icon.png"),
      title: "Card 3",
      description: "This is the third card",
    },
  ];

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const loadMoreData = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      const moreData = [
        {
          id: `${data.length + 1}`,
          image: require("../assets/avatar.png"),
          title: `Card ${data.length + 1}`,
          description: `This is card ${data.length + 1}`,
        },
        {
          id: `${data.length + 2}`,
          image: require("../assets/favicon.png"),
          title: `Card ${data.length + 2}`,
          description: `This is card ${data.length + 2}`,
        },
        {
          id: `${data.length + 3}`,
          image: require("../assets/icon.png"),
          title: `Card ${data.length + 3}`,
          description: `This is card ${data.length + 3}`,
        },
      ];
      setData([...data, ...moreData]);
      setIsLoading(false);
    }, 1500);
  }, [data, isLoading]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("Item added to cart:", item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome</Text>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.searchText}>
          Search for products you wish to buy today
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Search.."
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.products}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardComponent item={item} addToCart={addToCart} />
          )}
          numColumns={2}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading && <ActivityIndicator size="large" color="#0000ff" />
          }
        />
      </View>
    </View>
  );
};

export default HomePage;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  content: {
    backgroundColor: "#4c669f",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: height * 0.2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  searchText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    position: "absolute",
    top: height * 0.15,
    left: width * 0.05,
    backgroundColor: "#fff",
    borderColor: "#4c669f",
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    color: "#fff",
    width: width * 0.9,
  },
  products: {
    marginTop: 50,
    flex: 1,
  },
});
