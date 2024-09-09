import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import Card from "./components/Card";
import FloatingButton from "./components/FloatingButton";
import Header from "./components/Header";
import { useFetchCountries } from "./hooks/useFetchCountries";

export default function App() {
  const { countries, loading, loadMore } = useFetchCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const flatListRef = React.useRef(null);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      <FlatList
        ref={flatListRef}
        data={filteredCountries}
        renderItem={({ item }) => <Card country={item} />}
        keyExtractor={(item) => item.cca3}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
      <FloatingButton onPress={scrollToTop} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
