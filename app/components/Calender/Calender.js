import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";

function Calender(props) {
  const { ranges, handleDateChanged, reservedDates } = props;
  return (
    <DateRange
      moveRangeOnFirstSelection={false}
      editableDateInputs={true}
      ranges={[ranges]}
      onChange={(val) => handleDateChanged(val?.selection)}
      disabledDates={reservedDates}
      date={new Date()}
      minDate={new Date()}
      direction="vertical"
      showDateDisplay={false}
      rangeColors={["#262626"]}
      className="airbnb-calender"
      
    />
  );
}

export default Calender;
