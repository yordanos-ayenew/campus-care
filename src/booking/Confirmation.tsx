import { Link, useLocation } from "react-router-dom";

function Confirmation(){
    const location = useLocation();
    const booking = location.state;
    if (!booking){
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
            <p>Student: {booking.name}</p>
            <p>Phone: {booking.phone}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Reason: {booking.reason}</p>
            <Link to="/doctors">Back to Doctors</Link>
        </main>
    );
}
export default Confirmation;