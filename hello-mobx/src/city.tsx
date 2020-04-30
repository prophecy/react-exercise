import React from "react";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "./context";
import { TCity, TCities } from "./store";

export const CityView: React.FC<{ cities: TCities }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.code}>{city.name}</li>
      ))}
    </ul>
  );
};

export const CityList = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => {
    return <CityView cities={store.filteredCities} />;
  });
};

export default CityList;
