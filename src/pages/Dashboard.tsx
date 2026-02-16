
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar Placeholder */}
            <aside style={{ width: '250px', background: '#0f172a', color: 'white', padding: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>BSC Admin</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link to="/dashboard" style={{ color: 'white', opacity: 1 }}>Dashboard</Link>
                    <Link to="/dashboard/users" style={{ color: 'white', opacity: 0.7 }}>User Management</Link>
                    <Link to="/dashboard/classes" style={{ color: 'white', opacity: 0.7 }}>Kelas & Harga</Link>
                    <Link to="/dashboard/attendance" style={{ color: 'white', opacity: 0.7 }}>Absensi</Link>
                    <Link to="/" style={{ marginTop: 'auto', color: '#ef4444' }}>Keluar</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem', background: 'var(--background)' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <h1>Dashboard Overview</h1>
                    <div className="card" style={{ padding: '0.5rem 1rem' }}>Admin User</div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div className="card">
                        <h3>Total Siswa</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>120</p>
                    </div>
                    <div className="card">
                        <h3>Total Pelatih</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>8</p>
                    </div>
                    <div className="card">
                        <h3>Absensi Hari Ini</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>85%</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
