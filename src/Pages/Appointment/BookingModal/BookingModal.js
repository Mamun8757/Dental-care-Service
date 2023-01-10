import { format } from 'date-fns';
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ treatmentName, selectedDate }) => {
  const { name, slots } = treatmentName;
  const date = format(selectedDate, 'PP');

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;    
    const phone = form.phone.value;
    
    console.log(slot, name, email, phone);

  }
  const notify = () =>
    toast("Your Booking is success")

  return (
    <>
      <input type="checkbox" id="open-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative lg:w-1/4 md:w-1/3 ">
          <label
            htmlFor="open-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full mb-5"
            />
            <select name="slot" className="select select-bordered w-full mb-5">
              {slots.map((slot, index) => (
                <option value={slot} key={index} className="bg-slate-200">
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-5"
            />
            <button
              onClick={notify}
              type="submit"
              value="Submit"
              className="w-full headerBtn-color text-white p-2 rounded-md border-inherit"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;