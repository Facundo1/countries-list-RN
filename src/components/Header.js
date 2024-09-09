import React from "react";
import { View, TextInput, Picker, StyleSheet } from "react-native";

const Header = ({
  searchValue,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}) => (
  <View style={styles.header}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search countries..."
      value={searchValue}
      onChangeText={onSearchChange}
    />
    <Picker
      selectedValue={selectedRegion}
      onValueChange={onRegionChange}
      style={styles.picker}
    >
      <Picker.Item label="All" value="" />
      <Picker.Item label="Africa" value="Africa" />
      <Picker.Item label="America" value="Americas" />
      <Picker.Item label="Asia" value="Asia" />
      <Picker.Item label="Europe" value="Europe" />
      <Picker.Item label="Oceania" value="Oceania" />
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "baseline",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
  },
  searchInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  picker: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Header;
