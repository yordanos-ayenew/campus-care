import { useCallback, useState } from "react";
import { getDoctors } from "../api/doctorsApi";
import useFetch from "../hooks/useFetch";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";
import EmptyState from "../ui/EmptyState";
import DoctorList from "./DoctorList";
import DepartmnetFilter from "./DepartmentFilter";

function Doctors(){
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const fetchDoctors=useCallback(()=>getDoctors(),[]);
    const {data:doctors, loading, error} = useFetch(fetchDoctors);
    if (loading){
        return <Loading/>;
    }
    if (error){
        return <ErrorMessage message={error}/>;
    }
    if (!doctors||doctors.length===0){
        return <EmptyState message="No doctors found."/>;
    }
    const departments = ["All", ...new Set(doctors.map((doctor)=>doctor.department))];
    const filteredDoctors = selectedDepartment==="All"
       ?doctors : doctors.filter(
           (doctor)=>doctor.department===selectedDepartment
       );

    return (
        <main>
            <h1>Doctors</h1>
            <DepartmnetFilter
                departments={departments}
                selectedDepartment={selectedDepartment}
                onDepartmentChange={setSelectedDepartment}
            />
            <DoctorList doctors={filteredDoctors}/>
        </main>
    )
}
export default Doctors;