import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setappointmentOptions ] = useState([]);
    const [treatmentName, settreatmentName] = useState(null);


    useEffect(() =>{
        fetch("https://dental-care-service-server.vercel.app/availableOptions")
          .then((res) => res.json())
          .then((data) => setappointmentOptions(data));
    }, [])
    return (
      <section className="mt-10">
        <p className="text-center text-sky-400 font-bold">
          Available Appointment on {format(selectedDate, "PP")}{" "}
        </p>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appointmentOptions.map((option) => (
            <AppointmentOption
              key={option._id}
              appointmentOption={option}
              settreatmentName={settreatmentName}
            ></AppointmentOption>
          ))}
        </div>
        {treatmentName && (
          <BookingModal
            selectedDate={selectedDate}
            treatmentName={treatmentName}
          ></BookingModal>
        )}
      </section>
    );
};

export default AvailableAppointment;