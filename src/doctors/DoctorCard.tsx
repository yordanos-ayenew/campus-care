import { Link } from "react-router-dom";
import type { Doctor } from "./types";
type DoctorCardProps = {
    doctor: Doctor;
};

function DoctorCard({doctor}: DoctorCardProps){
    return(
        <article className="doctor-card">
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <p>Department: {doctor.department}</p>
            <p>Experience: {doctor.experience} years</p>
            <p>Status: {doctor.available ? "Available" : "Not Available"}</p>
            <Link className="doctor-details-link" to={`/doctors/${doctor.id}`}>
                View Details</Link>
        </article>
    );
}
export default DoctorCard;