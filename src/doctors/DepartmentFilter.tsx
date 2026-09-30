type DepartmentFilterProps = {
    departments: string[];
    selectedDepartment: string;
    onDepartmentChange: (department: string) => void;
};

function DepartmnetFilter({
    departments,
    selectedDepartment,
    onDepartmentChange
}:DepartmentFilterProps){
    return(
        <div className="department-filter">
            {departments.map((department)=>(
                <button key={department} 
                    className={department===selectedDepartment?"selected" : ""}
                    onClick={()=>onDepartmentChange(department)}
                    >
                    {department}
                </button>
            ))}
        </div>
    );
}
export default DepartmnetFilter;
