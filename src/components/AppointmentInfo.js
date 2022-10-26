import { BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        onClick={() => onDeleteAppointment(appointment.id)}
        type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiTrash />
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment.bokadAv}
          </span>
          <span className="flex-grow text-right">{appointment.bokDatum}</span>
        </div>
        <div className="leading-tight">
          <b className="font-bold text-blue-500">Kommentar: </b>
          {appointment.bokningsKommentar}
        </div>
      </div>
    </li>
  );
};

export default AppointmentInfo;
