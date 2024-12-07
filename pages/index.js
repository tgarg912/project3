import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
export default function Home() {
  return (
    <>
      <div
        className="fixed z-10 block inset-0 flex items-center justify-center"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="relative z-10 w-full max-w-screen-md overflow-y-auto">
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-lg">

              <button
                className="absolute top-2 right-2 justify-center rounded-full bg-red-500 hover:bg-red-600 flex focus:outline-none border-2 items-center sm:top-4 sm:right-4 sm:p-3 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-14 md:w-14 h-7 w-7 focus:ring focus:ring-red-400 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <form className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <h3 className="text-xl font-semibold mb-4">Appointment Request</h3>
                <div className="mb-4">
                  <label className="block mb-1">Student Name:</label>
                  <input
                    type="text"
                    name="studentName"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Student Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Student's Class:</label>
                  <input
                    type="text"
                    name="studentClass"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Student's Class"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">School Email:</label>
                  <input
                    type="email"
                    name="schoolEmail"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="School Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Reason for Appointment:</label>
                  <textarea
                    name="reason"
                    rows="4"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Enter your reason for the appointment"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 p-2 rounded border border-gray-300">
            <h2 className="text-xl font-semibold mb-2">Select a Person</h2>
            <div className="space-y-2">
              <button
                className={`w-full h-12 flex items-center justify-center p-2 rounded border border-gray-300 transition-colors hover:bg-blue-500 hover:text-white hover:border-blue-500 m-1`}
              >
                Kathleen Malone
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-gray-100 shadow-xl border-gray-300 border-2 p-4 rounded">
              <h2 className="text-xl font-semibold mb-2">
                Select Date and Time
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block mb-2">Select Date:</label>
                  <Calendar/>

                  <div className="hidden"></div>
                </div>

              </div>
              <div className="text-center md:text-right mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Appointments status</h2>

              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Enter email to search"
                  className="border p-2 flex-grow"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                >
                  Search
                </button>
              </div>

              <table className="w-full border border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-4 text-blue-700">Person</th>
                    <th className="p-4 text-blue-700">Date</th>
                    <th className="p-4 text-blue-700">Time</th>
                    <th className="p-4 text-blue-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">
                      <div className="flex justify-center">
                          Tanvi Garg
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        2023-12-01
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        10:00 AM
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      Confirmed
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

