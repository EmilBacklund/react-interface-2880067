import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddApointments = ({ onSendAppointment, lastId }) => {
  const clearData = {
    bokadAv: "",
    bokDatum: "",
    bokTid: "",
    avResa: "",
    bokningsKommentar: "",
  };

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      bokadAv: formData.bokadAv,
      bokDatum: formData.bokDatum + " " + formData.bokTid,
      avResa: formData.avResa,
      bokningsKommentar: formData.bokningsKommentar,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2  ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div className="flex gap-2 items-center">
          <BiCalendarPlus className="inline-block " /> Lägg till bokning
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5 mt-2 sm:mt-0">
            <label
              htmlFor="bokadAv"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bokad av
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="bokadAv"
                id="bokadAv"
                onChange={(event) => {
                  setFormData({ ...formData, bokadAv: event.target.value });
                }}
                value={formData.bokadAv}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="bokDatum"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Ankomstdag
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="bokDatum"
                id="bokDatum"
                onChange={(event) => {
                  setFormData({ ...formData, bokDatum: event.target.value });
                }}
                value={formData.bokDatum}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="bokTid"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Ankomsttid
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="bokTid"
                id="bokTid"
                onChange={(event) => {
                  setFormData({ ...formData, bokTid: event.target.value });
                }}
                value={formData.bokTid}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="avResa"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Avresedag
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="avResa"
                id="avResa"
                onChange={(event) => {
                  setFormData({ ...formData, avResa: event.target.value });
                }}
                value={formData.avResa}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="bokningsKommentar"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bokningskommentar
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="bokningsKommentar"
                name="bokningsKommentar"
                rows="3"
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    bokningsKommentar: event.target.value,
                  });
                }}
                value={formData.bokningsKommentar}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detaljerad kommentar av din bokning"
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPublish}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Skicka
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddApointments;
