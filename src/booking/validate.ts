export type BookingForm = {
    name: string;
    phone: string;
    date: string;
    time: string;
    reason: string;
};
const PHONE = /^(?:\+251|0)9\d{8}$/;
export type ValidationErrors = Partial<Record<keyof BookingForm, string>>;

export function validate(form: BookingForm): ValidationErrors{
    const errors: ValidationErrors = {};
    if(!form.name.trim()){
        errors.name="Name is required";
    }
    if(!form.phone.trim()){
        errors.phone="Phone number is required";
    } else if(!PHONE.test(form.phone)){
        errors.phone = "Use 09... or +2519...(Phone number)"; 
    }
    if(!form.date){
        errors.date="Date is required";
    }
    if(!form.time){
        errors.time="Time is required";
    }
    if(!form.reason.trim()){
        errors.reason="Reason is required";
    }
    return errors;
}