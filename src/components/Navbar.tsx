
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass fixed w-full z-50 top-0 left-0 border-b border-gray-200" style={{ position: 'fixed', width: '100%', zIndex: 50 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <img src="/logo.png" alt="BSC Logo" style={{ height: '40px', width: 'auto' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>BSC</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
                    <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Beranda</Link>
                    <a href="#about" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Tentang</a>
                    <a href="#classes" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Kelas</a>
                    <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Masuk / Daftar</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="glass" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Beranda</Link>
                    <a href="#about" onClick={() => setIsOpen(false)}>Tentang</a>
                    <a href="#classes" onClick={() => setIsOpen(false)}>Kelas</a>
                    <Link to="/login" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ textAlign: 'center' }}>Masuk</Link>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
