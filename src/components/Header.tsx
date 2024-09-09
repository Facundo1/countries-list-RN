import { Picker, StyleSheet, TextInput, View } from "react-native";

import React from "react";

interface HeaderProps {
  searchValue: string;
  onSearchChange: (text: string) => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchValue,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by country name"
        value={searchValue}
        onChangeText={onSearchChange}
      />
      <Picker
        selectedValue={selectedRegion}
        style={styles.picker}
        onValueChange={onRegionChange}
      >
        <Picker.Item label="All Regions" value="" />
        <Picker.Item label="Africa" value="Africa" />
        <Picker.Item label="Americas" value="Americas" />
        <Picker.Item label="Asia" value="Asia" />
        <Picker.Item label="Europe" value="Europe" />
        <Picker.Item label="Oceania" value="Oceania" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
  },
});

export default Header;
