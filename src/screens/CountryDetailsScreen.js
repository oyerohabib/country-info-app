import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, IconButton } from "react-native-paper";
import { useTheme } from "../context/ThemeContext";

const CountryDetailsScreen = ({ route, navigation }) => {
  const { country } = route.params;
  const { theme } = useTheme();

  const formatPopulation = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const InfoRow = ({ label, value }) => (
    <View style={styles.infoRow}>
      <Text style={[styles.label, { color: theme.colors.text }]}>{label}:</Text>
      <Text style={[styles.value, { color: theme.colors.text }]}>{value}</Text>
    </View>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <IconButton icon="arrow-left" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {country.name}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <Image
          source={{ uri: country.flag }}
          style={styles.flag}
          resizeMode="cover"
        />

        <View
          style={[styles.infoContainer, { backgroundColor: theme.colors.card }]}
        >
          <InfoRow label="Capital" value={country.capital} />
          <InfoRow
            label="Population"
            value={formatPopulation(country.population)}
          />
          <InfoRow label="Continent" value={country.continent} />
          <InfoRow label="Country Code" value={country.countryCode} />
        </View>

        {country.states && country.states.length > 0 && (
          <View
            style={[
              styles.statesContainer,
              { backgroundColor: theme.colors.card },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              States/Provinces
            </Text>
            {country.states.map((state, index) => (
              <Text
                key={index}
                style={[styles.stateItem, { color: theme.colors.text }]}
              >
                {state}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  content: {
    flex: 1,
  },
  flag: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  infoContainer: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
  },
  statesContainer: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  stateItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CountryDetailsScreen;
