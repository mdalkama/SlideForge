import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Users, Clock, Brain, Rocket, Play, Check, Star, X, Volume2 } from 'lucide-react';

export default function Home() {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleGenerateClick = () => {
        // Navigate to /generate page
        window.location.href = '/generate';
    };

    const handleDemoClick = () => {
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
    };

    const features = [
        { icon: Brain, title: "AI-Powered Intelligence", desc: "Advanced algorithms create professional presentations" },
        { icon: Zap, title: "Lightning Fast", desc: "Generate complete presentations in under 30 seconds" },
        { icon: Users, title: "Team Collaboration", desc: "Real-time editing and sharing with your team" }
    ];

    const stats = [
        { number: "10M+", label: "Presentations Created" },
        { number: "500K+", label: "Happy Users" },
        { number: "99.9%", label: "Uptime" },
        { number: "4.9★", label: "User Rating" }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,29,149,0.3),transparent_50%)]" />

                {/* Dynamic cursor glow */}
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                />

                {/* Enhanced Floating Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />

                {/* Geometric shapes */}
                <div className="absolute top-32 right-32 w-8 h-8 border border-purple-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-32 left-32 w-6 h-6 border border-cyan-500/30 animate-pulse" />
            </div>

            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closeVideoModal}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-gray-900 rounded-3xl p-6 max-w-4xl w-full border border-gray-700 shadow-2xl">
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl flex items-center justify-center">
                            {/* Placeholder for actual video */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Play className="w-10 h-10 text-white ml-1" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Demo Video</h3>
                                <p className="text-gray-300 mb-6">Watch how AI creates stunning presentations in seconds</p>
                                <div className="flex items-center justify-center space-x-4">
                                    <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform">
                                        <Play className="w-4 h-4 mr-2" />
                                        Play Demo
                                    </button>
                                    <button className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-colors">
                                        <Volume2 className="w-4 h-4 mr-2" />
                                        Audio On
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                                <div className="text-cyan-400 font-bold">2:30</div>
                                <div className="text-gray-400">Duration</div>
                            </div>
                            <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                                <div className="text-purple-400 font-bold">1080p</div>
                                <div className="text-gray-400">Quality</div>
                            </div>
                            <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                                <div className="text-pink-400 font-bold">NEW</div>
                                <div className="text-gray-400">Updated</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-8 hover:scale-105 transition-transform">
                        <Sparkles className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" />
                        <span className="text-sm font-medium">Powered by Advanced AI</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
                        <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">
                            Create Stunning
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Presentations
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Transform your ideas into professional presentations with AI magic.
                        No design skills needed—just pure creativity unleashed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button
                            onClick={handleGenerateClick}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:rotate-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center">
                                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                Start Creating Now
                            </div>
                        </button>

                        <button
                            onClick={handleDemoClick}
                            className="flex items-center px-8 py-4 border border-gray-600 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:border-gray-500"
                        >
                            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Enhanced Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group hover:scale-110 transition-transform cursor-pointer">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Features Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Supercharge Your Workflow
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Everything you need to create, edit, and share presentations that wow your audience
                        </p>
                    </div>

                    {/* Dynamic Feature Showcase */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = currentFeature === index;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-105 ${isActive
                                            ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/50 shadow-lg shadow-purple-500/25'
                                            : 'bg-gray-900/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50'
                                            }`}
                                        onClick={() => setCurrentFeature(index)}
                                    >
                                        <div className="flex items-center mb-3">
                                            <Icon className={`w-6 h-6 mr-3 transition-all ${isActive ? 'text-cyan-400 animate-pulse' : 'text-gray-400'}`} />
                                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        </div>
                                        <p className="text-gray-400">{feature.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl hover:scale-105 transition-transform">
                                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                                    </div>

                                    <div className="text-center relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                            {React.createElement(features[currentFeature].icon, { className: "w-8 h-8 text-white" })}
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2">{features[currentFeature].title}</h4>
                                        <p className="text-gray-400 text-sm">{features[currentFeature].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Feature Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105 hover:rotate-1">
                            <Clock className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform group-hover:animate-spin" />
                            <h3 className="text-xl font-bold mb-3">Instant Generation</h3>
                            <p className="text-gray-400">Create complete presentations in seconds, not hours. AI handles the heavy lifting.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105 hover:-rotate-1">
                            <Star className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform group-hover:animate-pulse" />
                            <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
                            <p className="text-gray-400">Every slide is designed with professional standards and modern aesthetics.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105 hover:rotate-1">
                            <Check className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform group-hover:animate-bounce" />
                            <h3 className="text-xl font-bold mb-3">Easy Customization</h3>
                            <p className="text-gray-400">Fine-tune colors, fonts, and layouts with intuitive editing tools.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-12 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform relative overflow-hidden">
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 animate-pulse" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                                    Ready to Transform Your Ideas?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join millions of creators who are already using AI to build stunning presentations that captivate audiences.
                            </p>
                            <button
                                onClick={handleGenerateClick}
                                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:rotate-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-center">
                                    <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                                    Get Started Free
                                </div>
                            </button>
                            <p className="text-sm text-gray-400 mt-4">No credit card required • 3 free presentations</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}