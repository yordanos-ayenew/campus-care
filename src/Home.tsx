import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <p className="home-label">STUDENT CLINIC</p>
                <h1>Welcome to CampusCare</h1>
                <p>Find doctors and manage your clinic appointments easily.</p>
                <div className="home-actions">
                    <Link className="home-primary-button" to="/doctors">
                        Find a Doctor
                    </Link>
                    <Link className="home-secondary-button" to="/appointments">
                        My Appointments
                    </Link>
                </div>
            </section>
            <section className="home-features">
                <article className="feature-card">
                    <h3>Find Doctors</h3>
                    <p>Browse doctors by department.</p>
                </article>
                <article className="feature-card">
                    <h3>Book an Appointment</h3>
                    <p>Choose a doctor and book a convenient time.</p>
                </article>
                <article className="feature-card">
                    <h3>Manage Appointments</h3>
                    <p>View or cancel your appointments.</p>
                </article>
            </section>
        </main>
    );
}
export default Home;