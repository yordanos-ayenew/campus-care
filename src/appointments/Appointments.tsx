import { useAppointmentStore } from "./appointmentStore";
import useFetch from "../hooks/useFetch";
import { getDoctors } from "../api/doctorsApi";
import type { Doctor } from "../doctors/types";
import { useAuth } from "../auth/AuthContext";

function Appointments() {
    const {logout} = useAuth();
    const appointments = useAppointmentStore(
        (state) => state.appointments
    );
    const removeAppointment = useAppointmentStore(
        (state) => state.removeAppointment
    );
    const {data: doctors, loading, error} = useFetch<Doctor[]>(getDoctors);
    if (appointments.length === 0) {
        return (
            <main>
                <h1>My Appointments</h1>
                <p>You have no appointments yet.</p>
            </main>
        );
    }
    if (loading) {
        return (
            <main>
                <h1>My Appointments</h1>
                <p>Loading appointments...</p>
            </main>
        );
    }
    if (error) {
        return (
            <main>
                <h1>My Appointments</h1>
                <p>Failed to load doctor information.</p>
            </main>
        );
    }
    return (
        <main>
            <h1>My Appointments</h1>
            <button type="button" onClick={logout}>
                Sign Out
            </button>
            {appointments.map((appointment) => {
                const doctor = doctors?.find(
                    (doctor) => doctor.id.toString() === appointment.doctorId
                );
                return (
                    <article key={appointment.id}>
                        <h2>Appointment</h2>

                        <p>Doctor: {doctor?.name ?? "Unknown doctor"}</p>
                        <p>Department:{" "} {doctor?.department ?? "Unknown department"}</p>
                        <p>Student: {appointment.name}</p>
                        <p>Phone: {appointment.phone}</p>
                        <p>Date: {appointment.date}</p>
                        <p>Time: {appointment.time}</p>
                        <p>Reason: {appointment.reason}</p>
                        <button type="button" onClick={() =>
                                removeAppointment(appointment.id)
                            }
                        >
                            Cancel Appointment
                        </button>
                    </article>
                );
            })}
        </main>
    );
}
export default Appointments;