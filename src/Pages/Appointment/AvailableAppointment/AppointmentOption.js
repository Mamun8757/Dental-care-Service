import React from 'react';

const AppointmentOption = ({appointmentOption, settreatmentName}) => {
    const {name, slots} = appointmentOption;
    return (
      <div className="mx-auto card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p className="text-center">
            {slots.length > 0 ? slots[0] : "Try Others Slots"}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available{" "}
          </p>
          <div className="pt-2 card-actions justify-center">
            <label 
            disabled = {slots.length === 0}
            htmlFor="open-modal" 
            className="btn headerBtn-color"
            onClick={() => settreatmentName(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;