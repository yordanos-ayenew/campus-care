import type { Doctor } from "../doctors/types";

export async function getDoctors(): Promise<Doctor[]> {
    const response = await fetch("/doctors.json");
    if(!response){
        throw new Error("Failed to fetch doctors");
    }
    return response.json();
}