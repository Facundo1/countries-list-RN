import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ country }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: country.flags.svg }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>
      <Text style={styles.detail}>
        Population: <Text style={styles.value}>{country.population}</Text>
      </Text>
      <Text style={styles.detail}>
        Region: <Text style={styles.value}>{country.region}</Text>
      </Text>
      <Text style={styles.detail}>
        Capital: <Text style={styles.value}>{country.capital}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  flag: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  value: {
    fontWeight: "normal",
  },
});

export default Card;
