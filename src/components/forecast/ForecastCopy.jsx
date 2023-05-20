import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Forecast({ data }) {
  return (
    <>
      <label htmlFor="">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.map((data, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="accordion-default">
                  <img
                    className="icon"
                    src={`icons/${data.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <p className="day">Wednesday</p>
                  <p className="description">Clear Sky</p>
                  <p className="temp">30.12°C</p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-full-details">
                <div className="accordion-items">
                  <p>Temperature</p>
                  <h4>{data.main.temp}</h4>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
