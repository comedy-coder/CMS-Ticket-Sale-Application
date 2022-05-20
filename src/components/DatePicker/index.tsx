import React from "react";
import "./DatePicker.scss";
import { useState } from "react";
import DatePicker from "sassy-datepicker";
import Radio from "@mui/material/Radio";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const onChange = (newDate: any) => {
    setDate(newDate);
  };
  const [state, setState] = useState<any | null>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <>
      <div className="selector">
        <div className="selector-item">
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            sx={{
              color: "#27AEF9",
              "&.Mui-checked": {
                color: "#27AEF9",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <label>Theo ngày</label>
        </div>
        <div className="selector-item">
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
            sx={{
              color: "#27AEF9",
              "&.Mui-checked": {
                color: "#27AEF9",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <label>Theo tuần</label>
        </div>
      </div>
      <DatePicker onChange={onChange} selected={date} />
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
};

export default DashboardCalendar;
