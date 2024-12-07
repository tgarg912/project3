import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
export default function Home() {
  return (
    <>
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
