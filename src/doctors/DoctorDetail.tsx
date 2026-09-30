import { useParams, Link } from "react-router-dom";
import { useCallback } from "react";
import { getDoctors } from "../api/doctorsApi";
import useFetch from "../hooks/useFetch";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";

function DoctorDetail(){
    const{id} = useParams();
    const fetchDoctors = useCallback(()=>getDoctors(), []);
    const {data: doctors, loading, error} = useFetch(fetchDoctors);
    if(loading){
        return <Loading/>;
    }
    if(error){
        return <ErrorMessage message={error}/>;
    }
    const doctor = doctors?.find(
        (doctor)=>doctor.id===Number(id)
    );
    if(!doctor){
        return <EmptyState message="Doctor not found."/>
    }
    return (
        <main className="doctor-detail-page">
            <article className="doctor-detail-card">
                <h1>{doctor.name}</h1>
                <p>
                    <strong>Department: </strong>{doctor.department}
                </p>

                <p>
                    <strong>Specialization: </strong>{doctor.specialization}
                </p>

                <p>
                    <strong>Experience: </strong>{doctor.experience} years
                </p>

                <p>
                    <strong>Status: </strong>{doctor.available ? "Available" : "Not Available"}
                </p>
                {doctor.available ? (
                    <Link className="book-button" to={`/booking/${doctor.id}`}>
                        Book Appointment
                    </Link>
                ) : (
                    <p className="unavailable-message">
                        This doctor is currently unavailable for booking.
                    </p>
                )}
            </article>
        </main>
    )
}
export default DoctorDetail;