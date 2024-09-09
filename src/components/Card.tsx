import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
  
}

interface CardProps {
  country: Country;
}

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: country.flags.svg }} style={styles.flag} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{country.name.common}</Text>
        <Text style={styles.detail}>
          Population: <Text style={styles.value}>{country.population}</Text>
        </Text>
        <Text style={styles.detail}>
          Region: <Text style={styles.value}>{country.region}</Text>
        </Text>
        <Text style={styles.detail}>
          Capital: <Text style={styles.value}>{country.capital?.[0]}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 1,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  flag: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
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
