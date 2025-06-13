export default function MakeAppointment() {
  return (
    <div className="">
      <div className="p-6 flex flex-col gap-6 border border-gray-200 bg-white rounded-xl shadow-sm">
        <p className="text-sm font-semibold text-gray-800">
          Fill out the online appointment form and we will contact you shortly.
        </p>
        <button className="p-3 bg-teal-500 text-white rounded-md font-medium text-xs">
          Make Appointment
        </button>
      </div>
    </div>
  );
}
