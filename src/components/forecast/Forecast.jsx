import React, { useState } from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Forecast({ data }) {
  // For accordion
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="forecast-contianer">
      <p className="header">Five days Forecast</p>
      {data.list.map((data, index) => (
        <Accordion
          className="accordion"
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <div className="accordion-default">
              <img
                className="icon"
                src={`icons/${data.weather[0].icon}.png`}
                alt="weather"
              />
              <p className="date">{data.dt_txt}</p>
              <p className="description">{data.weather[0].description}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-full-details">
              <div className="item-details side">
                <p>Temperature</p>
                <h3>{data.main.temp}°C</h3>
              </div>
              <div className="item-details side">
                <p>Wind</p>
                <h3>{data.wind.speed} m/s</h3>
              </div>
              <div className="item-details side">
                <p>Humidity</p>
                <h3>{data.main.humidity}</h3>
              </div>
              <div className="item-details">
                <p>Pressure</p>
                <h3>{data.main.pressure} hPa</h3>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Forecast;
