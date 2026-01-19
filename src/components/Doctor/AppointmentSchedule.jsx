import React, { useState } from "react";

const AppointmentSchedule = () => {
  // Generate next 7 days dynamically
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);

      dates.push({
        label: newDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
        key: newDate.toISOString().split("T")[0], // YYYY-MM-DD for comparison
      });
    }
    return dates;
  };

  const dates = generateDates();

  // Generate time slots from 8 AM to 9 PM
  const generateTimes = () => {
    const slots = [];
    for (let hour = 8; hour <= 21; hour++) {
      const isPM = hour >= 12;
      const displayHour = hour > 12 ? hour - 12 : hour;
      const label = `${displayHour}:00 ${isPM ? "PM" : "AM"}`;

      slots.push({
        label,
        totalMinutes: hour * 60,
      });
    }
    return slots;
  };

  const times = generateTimes();

  // State
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Current date & time
  const todayKey = new Date().toISOString().split("T")[0];
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Filter available time slots
  const availableTimes =
    selectedDate?.key === todayKey
      ? times.filter((time) => time.totalMinutes > currentMinutes)
      : times;

  return (
    <div className="md:w-2/3 p-5 md:ml-85 bg-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4 items-center">
        Book Appointment
      </h2>

      {/* Dates */}
      <h4 className="font-medium mb-2 items-center">Select Date</h4>
      <div className="flex gap-3 md:flew-row overflow-scroll">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDate(date);
              setSelectedTime("");
            }}
            className={`px-8 py-8 rounded-md border text-lg rounded-t-full rounded-b-full
              ${
                selectedDate?.key === date.key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {date.label}
          </button>
        ))}
      </div>

      {/* Times (only show after date selection) */}
      {selectedDate && (
        <>
          <h4 className="font-medium mt-6 mb-2">Select Time</h4>
          <div className="flex gap-3 overflow-scroll">
            {availableTimes.length > 0 ? (
              availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time.label)}
                  className={`px-3 py-3  border text-sm rounded-l-full rounded-r-full
                    ${
                      selectedTime === time.label
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                    }`}
                >
                  {time.label}
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                No remaining slots for today
              </p>
            )}
          </div>
        </>
      )}

      <button className="mt-6 px-10 py-3 rounded-l-2xl rounded-r-2xl bg-blue-600 text-white">
        Book an Appointment
      </button>
    </div>
  );
};

export default AppointmentSchedule;
