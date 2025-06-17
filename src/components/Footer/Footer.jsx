import React from 'react';
import { Sparkles, Home, Zap, Info, User, Settings, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const navItems = [
        { name: 'Home', to: '/', icon: Home },
        { name: 'Generate', to: '/generate', icon: Zap },
        { name: 'About', to: '/about', icon: Info },
        { name: 'Profile', to: '/profile', icon: User },
        { name: 'Settings', to: '/settings', icon: Settings },
    ];

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Github', icon: Github, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
    ];

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Contact Support', href: '#' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
    ];

    return (
        <footer className="relative bg-black text-white border-t border-gray-800">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,29,149,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <a href="/" className="flex items-center space-x-2 mb-6">
                                <Sparkles className="w-8 h-8 text-purple-400" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    SlideForge
                                </span>
                            </a>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Transform your ideas into professional presentations with AI magic.
                                Create stunning slides in seconds, not hours.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">hello@slideforge.ai</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                            <ul className="space-y-3">
                                {navItems.map(item => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.name}>
                                            <a
                                                href={item.to}
                                                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors group"
                                            >
                                                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span className="text-sm">{item.name}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                            <ul className="space-y-3">
                                {companyLinks.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                            <ul className="space-y-3">
                                {supportLinks.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                            <ul className="space-y-3">
                                {legalLinks.map(link => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
                            <div className="lg:flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
                                <p className="text-gray-400 text-sm mb-4 lg:mb-0">
                                    Get the latest updates on new features and AI improvements.
                                </p>
                            </div>
                            <div className="lg:flex-shrink-0 lg:ml-8">
                                <div className="flex max-w-md mx-auto lg:mx-0">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-r-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 bg-gray-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="text-gray-400 text-sm">
                                © 2025 SlideForge AI. All rights reserved.
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4">
                                {socialLinks.map(social => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Additional Info */}
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>Made with ❤️ by SlideForge Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}