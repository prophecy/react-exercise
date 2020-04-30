import React from "react";
import { TCityList } from "../stores/models/cityModel";

export const City: React.FC<{ cities: TCityList }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.code}>{city.name}</li>
      ))}
    </ul>
  );
};
