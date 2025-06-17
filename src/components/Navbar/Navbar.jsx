import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Home, Zap, Info, User, Settings } from 'lucide-react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: '/', icon: Home },
        { name: 'Generate', to: '/generate', icon: Zap },
        { name: 'About', to: '/about', icon: Info },
        { name: 'Profile', to: '/profile', icon: User },
        { name: 'Settings', to: '/settings', icon: Settings },
    ];

    const baseClasses = 'group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300';
    const inactiveClasses = 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80';
    const activeClasses = 'text-white bg-indigo-600 hover:bg-indigo-700';

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100'
                    : 'bg-white/95 backdrop-blur-sm shadow-md'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                            <Sparkles className="w-8 h-8 text-indigo-600 transition-colors" />
                            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                                SlideForge
                            </span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map(item => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.to;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses
                                            }`}
                                    >
                                        <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-white' : ''}`} />
                                        <span className={`font-medium ${isActive ? 'text-white' : ''}`}>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center">
                            <Link
                                to="/generate"
                                className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile toggle */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-xl text-gray-700 hover:text-indigo-600 focus:outline-none">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
                        {navItems.map(item => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.to;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center space-x-2 px-4 py-3 ${isActive ? 'text-white bg-indigo-600' : 'text-gray-700 hover:bg-indigo-50'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                        <div className="px-4 py-4 border-t border-gray-200">
                            <Link
                                to="/generate"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            {/* Spacer so content isn't hidden behind fixed navbar */}
            <div className="h-20" />
        </>
    );
}
