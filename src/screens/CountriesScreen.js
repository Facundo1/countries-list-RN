import { ActivityIndicator, FlatList, View } from "react-native";

import Card from "../components/Card";
import React from "react";
import { useFetchCountries } from "../hooks/useFetchCountries";

const CountriesScreen = () => {
  const { countries, loading, loadMore } = useFetchCountries();

  return (
    <View>
      <FlatList
        data={countries}
        renderItem={({ item }) => <Card country={item} />}
        keyExtractor={(item) => item.cca3}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default CountriesScreen;
