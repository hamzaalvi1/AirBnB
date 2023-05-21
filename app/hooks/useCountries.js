import countries from "world-countries";

const countriesList = countries.map((country) => ({
  label: country.name.common,
  value: country.cca2,
  latlng: country.latlng,
  region: country.region,
  countryCode: country.cca2,
}));

const useCountries = () => {
  const getAllCountries = () => countriesList;
  const getCountryByValue = (value) =>
    countriesList.find((country) => value === country.value);

  return {
    getAllCountries,
    getCountryByValue,
  };
};

export default useCountries;
