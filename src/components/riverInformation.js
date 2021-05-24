import React, { useState, useEffect } from "react";
import getRiverInformation from "../services/rivers";
import PropTypes from "prop-types";

export default function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState({});

  useEffect(() => {
    let mounted = true;
    getRiverInformation(name).then((data) => {
      if (mounted) {
        setRiverInformation(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, [name]);

  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>{riverInformation?.continent}</li>
        <li>{riverInformation?.length}</li>
        <li>{riverInformation?.outflow}</li>
      </ul>
    </div>
  );
}

RiverInformation.protoTypes = {
  name: PropTypes.string.isRequired
};
