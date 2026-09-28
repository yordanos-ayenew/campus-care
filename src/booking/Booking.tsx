import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { validate, type ValidationErrors } from "./validate";
import { useAppointmentStore } from "../appointments/appointmentStore";
function Booking(){
    const navigate = useNavigate();
    const {doctorId} = useParams();
    const addAppointment = useAppointmentStore(
        (state) => state.addAppointment
    );
    const [form, setForm] = useState({
        name: "", phone: "", date: "", time: "", reason: ""
    });
    const [errors, setErrors]=useState<ValidationErrors>({});
    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ){
        const {name, value} = event.target;
        setForm((prev)=>({
            ...prev, [name]: value
        }));
        setErrors((prev)=>({
            ...prev, [name]: ""
        }))
    }
    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ){
        event.preventDefault();
        const ValidationErrors = validate(form)
        setErrors(ValidationErrors);
        if(Object.keys(ValidationErrors).length>0){
            return;
        }
        const appointment = {
            id: crypto.randomUUID(),
            doctorId: doctorId!,
            ...form
        };
        addAppointment(appointment);
        navigate(`/booking/confirmation/${appointment.id}`);
    }
    return(
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
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                       id="phone"
                       name="phone"
                       value={form.phone}
                       onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
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
                    {errors.date && <p>{errors.date}</p>}
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
                    {errors.time && <p>{errors.time}</p>}
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
                {errors.reason && <p>{errors.reason}</p>}
                <button type="submit">Book Appointment</button>
            </form>
        </main>
    )
}
export default Booking;