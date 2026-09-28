import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BookingForm } from "../booking/validate";

export type Appointment = BookingForm & {
  id: string;
  doctorId: string;
};
type AppointmentStore = {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
};
export const useAppointmentStore = create<AppointmentStore>()(
  persist((set) => ({
      appointments: [],
      addAppointment: (appointment) =>
        set((state) => ({
          appointments: [...state.appointments, appointment],
        })),
    }),
    {
      name: "campus-care-appointments",
    },
  ),
);