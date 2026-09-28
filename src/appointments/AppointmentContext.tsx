import { createContext, useContext, useState } from "react";
import type { BookingForm } from "../booking/validate";

export type Appointment = BookingForm & {
  id: string;
  doctorId: string;
};

type AppointmentContextType = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
};

const AppointmentContext = createContext<
  AppointmentContextType | undefined
>(undefined);

export function AppointmentProvider({children}: {children: React.ReactNode;}){
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function addAppointment(appointment: Appointment) {
    setAppointments((prev) => [...prev, appointment]);
  }
  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointments must be used inside AppointmentProvider",
    );
  }
  return context;
}