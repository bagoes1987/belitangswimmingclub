
import Navbar from '../components/Navbar';
import { ArrowRight, Trophy, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <img src="/logo.png" alt="BSC Logo" style={{ width: '120px', height: 'auto', marginBottom: '1.5rem' }} />
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Belitang Swimming Club <br />
                        <span style={{ color: 'var(--primary)' }}>Cetak Juara Masa Depan</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Bergabunglah dengan komunitas renang profesional kami. Dari pemula hingga juara, kami punya program untuk semua level.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/login" className="btn btn-primary">
                            Daftar Sekarang <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <a href="#classes" className="btn btn-outline">Lihat Program</a>
                    </div>
                </div>
            </section>

            {/* Stats / Features */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div className="card">
                        <Users size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                        <h3>Pelatih Profesional</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Didukung oleh pelatih berpengalaman dan bersertifikat.</p>
                    </div>
                    <div className="card">
                        <Trophy size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                        <h3>Prestasi Nyata</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Mencetak atlet berprestasi di tingkat regional dan nasional.</p>
                    </div>
                    <div className="card">
                        <Star size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                        <h3>Fasilitas Lengkap</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Kolam standar dan peralatan latihan modern.</p>
                    </div>
                </div>
            </section>

            {/* Classes Section */}
            <section id="classes" style={{ padding: '4rem 0', background: '#fff' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Pilihan Kelas</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Pemula */}
                        <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                            <h3>Kelas Pemula</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Untuk yang baru belajar berenang.</p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                <li>Dasar-dasar pernafasan</li>
                                <li>Teknik mengapung</li>
                                <li>Gaya bebas dasar</li>
                            </ul>
                            <Link to="/login" className="btn btn-outline" style={{ width: '100%' }}>Pilih Kelas</Link>
                        </div>

                        {/* FUN */}
                        <div className="card" style={{ borderTop: '4px solid #10b981' }}>
                            <h3>Kelas FUN</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Renang santai untuk kesehatan & hobi.</p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                <li>Latihan rutin</li>
                                <li>Permainan air</li>
                                <li>Kebugaran fisik</li>
                            </ul>
                            <Link to="/login" className="btn btn-outline" style={{ width: '100%' }}>Pilih Kelas</Link>
                        </div>

                        {/* Champion */}
                        <div className="card" style={{ borderTop: '4px solid var(--secondary)', background: 'linear-gradient(to bottom, #fff, #fffbeb)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>Kelas Champion</h3>
                                <Trophy size={20} color="var(--secondary)" />
                            </div>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Fokus kompetisi dan prestasi.</p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                <li>Program intensif</li>
                                <li>Time trial rutin</li>
                                <li>Persiapan lomba</li>
                            </ul>
                            <Link to="/login" className="btn btn-primary" style={{ width: '100%' }}>Gabung Tim</Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ background: '#0f172a', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
                <div className="container">
                    <p>&copy; 2024 Belitang Swimming Club. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
