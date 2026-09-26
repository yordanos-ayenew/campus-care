import { useState } from "react";
import { useParams } from "react-router-dom";

function Booking() {
  const { doctorId } = useParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({doctorId, ...form});
  }
  return (
    <main>
      <h1>Book an Appointment</h1>
      <p>Doctor ID: {doctorId}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Student Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            name="reason"
            value={form.reason}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </main>
  );
}
export default Booking;