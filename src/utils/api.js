import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data.map((country) => ({
      name: country.name.common,
      capital: country.capital?.[0] || "N/A",
      population: country.population,
      flag: country.flags.png,
      countryCode: country.cca2,
      continent: country.continents?.[0] || "N/A",
      states: country.states || [],
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const searchCountries = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${query}`);
    return response.data.map((country) => ({
      name: country.name.common,
      capital: country.capital?.[0] || "N/A",
      population: country.population,
      flag: country.flags.png,
      countryCode: country.cca2,
      continent: country.continents?.[0] || "N/A",
      states: country.states || [],
    }));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    console.error("Error searching countries:", error);
    throw error;
  }
};
