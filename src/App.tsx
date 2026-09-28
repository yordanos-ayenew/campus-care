import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Doctors from "./doctors/Doctors";
import DoctorDetail from "./doctors/DoctorDetail";
import Booking from "./booking/Booking";
import Confirmation from "./booking/Confirmation";
import Appointments from "./appointments/Appointments";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:id" element={<DoctorDetail />} />
          <Route path="booking/:doctorId" element={<Booking />} />
          <Route path="booking/confirmation/:appointmentId" element={<Confirmation />}/>
          <Route path="appointments" element={<Appointments/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;