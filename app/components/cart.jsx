// components/Cart.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Cart = ({ cartItems, removeFromCart, toggleModal }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Cart Items</Text>
      {cartItems.length ? (
        <View>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.cartItemImage}
                />
                <View style={styles.cartItemText}>
                  <Text style={styles.cartItemTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <Image
          source={require("../../assets/cartEmpty.png")}
          style={styles.cartEmpty}
        />
      )}

      <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cartItemText: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  removeButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: width * 0.2,
    borderRadius: 5,
    marginTop: 5,
  },
  removeButtonText: {
    color: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: height * 0.9,
    width: width * 0.9,
    margin: 20,
    alignItems: "center",
    backgroundColor: "#4c669f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPriceText: {
    position: "absolute",
    top: height * 0.7,
    width: width * 0.9,
  },
});

export default Cart;
