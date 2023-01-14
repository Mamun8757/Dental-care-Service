import chair from '../../../Resources/Assets/images/chair.png';
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist-chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            
          ></DayPicker>
        </div>
      </div>
    );
};

export default AppointmentBanner;