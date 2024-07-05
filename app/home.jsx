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
  Modal,
  TouchableOpacity,
} from "react-native";
import CardComponent from "./components/card-component";
import Cart from "./components/cart";

const HomePage = () => {
  const initialData = [
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/I/4109t2-iaPL._AC_UF1000,1000_QL80_.jpg",
      title: "Price: $1.5/lb",
      description: "Tomato",
    },
    {
      id: "2",
      image:
        "https://www.crimsoncoward.com/wp-content/uploads/2023/05/potatoes-scaled.jpg",
      title: "Price: $0.75/lb",
      description: "Potato",
    },
    {
      id: "3",
      image:
        "https://assets.shop.loblaws.ca/products/20768660/b2/en/front/20768660_front_a06_@2.png",
      title: "Price: $20/lb",
      description: "Vegetable Oil",
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/61uOR7f-7kL.jpg",
      title: "Price: $4/lb",
      description: "Vegetable Oil",
    },
  ];

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const loadMoreData = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      const moreData = [
        {
          id: `${data.length + 1}`,
          image:
            "https://m.media-amazon.com/images/I/4109t2-iaPL._AC_UF1000,1000_QL80_.jpg",
          title: "Price: $1.5/lb",
          description: "Tomato",
        },
        {
          id: `${data.length + 2}`,
          image:
            "https://www.crimsoncoward.com/wp-content/uploads/2023/05/potatoes-scaled.jpg",
          title: "Price: $0.75/lb",
          description: "Potato",
        },
        {
          id: `${data.length + 3}`,
          image:
            "https://assets.shop.loblaws.ca/products/20768660/b2/en/front/20768660_front_a06_@2.png",
          title: "Price: $20/lb",
          description: "Vegetable Oil",
        },
        {
          id: `${data.length + 4}`,
          image: "https://m.media-amazon.com/images/I/61uOR7f-7kL.jpg",
          title: "Price: $4/lb",
          description: "Vegetable Oil",
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

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={require("../assets/cart.png")} style={styles.cart} />
          </TouchableOpacity>
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

      {/* Modal for Cart */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          toggleModal={toggleModal}
        />
      </Modal>
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
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
  },
  cart: {
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
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#4c669f",
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    color: "#000",
    width: "100%",
    marginBottom: 10,
    marginTop: 20,
  },
  products: {
    flex: 1,
    padding: 10,
  },
});
