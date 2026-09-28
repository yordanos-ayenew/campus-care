import { Link, useParams } from "react-router-dom";
import { useAppointments } from "../appointments/AppointmentContext";

function Confirmation(){
    const {doctorId} = useParams();
    const {appointments} = useAppointments();
    const appointment = appointments.find(
        (appointment)=>appointment.doctorId===doctorId
    );
    if (!appointment){
        return(
            <main>
                <h1>No Booking Found</h1>
                <p>There is no appointment information to display.</p>
                <Link to="/doctors">Back to Doctors</Link>
            </main>
        );
    }
    return(
        <main>
            <h1>Appointment Confirmed</h1>
            <p>Your appointment has been successfully booked.</p>
            <p>Student: {appointment.name}</p>
            <p>Phone: {appointment.phone}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Reason: {appointment.reason}</p>
            <Link to="/doctors">Back to Doctors</Link>
        </main>
    );
}
export default Confirmation;