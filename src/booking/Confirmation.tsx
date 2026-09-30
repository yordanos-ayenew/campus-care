import { Link, useParams } from "react-router-dom";
import { useAppointmentStore } from "../appointments/appointmentStore";

function Confirmation(){
    const {appointmentId} = useParams();
    const appointments = useAppointmentStore(
        (state)=> state.appointments
    );
    const appointment = appointments.find(
        (appointment)=>appointment.id===appointmentId
    );
    if (!appointment){
        return(
            <main className="confirmation-page">
                <article className="confirmation-card">
                    <h1>No Booking Found</h1>
                    <p>There is no appointment information to display.</p>
                    <Link className="confirmation-link" to="/doctors">Back to Doctors</Link>
                </article>
            </main>
        );
    }
    return(
        <main className="confirmation-page">
            <article className="confirmation-card">
                <h1>Appointment Confirmed</h1>
                <p className="confirmation-message">
                    Your appointment has been successfully booked.
                </p>
                <div className="appointment-details">
                    <p><strong>Student:</strong> {appointment.name}</p>
                    <p><strong>Phone:</strong> {appointment.phone}</p>
                    <p><strong>Date:</strong> {appointment.date}</p>
                    <p><strong>Time:</strong> {appointment.time}</p>
                    <p><strong>Reason:</strong> {appointment.reason}</p>
                </div>
                <Link className="confirmation-link" to="/appointments">
                    View My Appointments
                </Link>
            </article>
        </main>
    );
}
export default Confirmation;