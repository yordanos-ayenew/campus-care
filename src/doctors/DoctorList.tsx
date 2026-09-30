import type { Doctor } from "./types";
import DoctorCard from "./DoctorCard";

type DoctorListProps = {
    doctors: Doctor[];
};

function DoctorList({doctors}: DoctorListProps){
    return(
        <section className="doctor-list">
            {doctors.map((doctor)=>(
                <DoctorCard key={doctor.id} doctor={doctor}/>
            ))}
        </section>
    );
}
export default DoctorList;