import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Palette, Globe, Zap, ArrowRight, Wand2, Settings, Target, Users, ChevronDown } from 'lucide-react';
import { BASE_URL } from '../../constants';
import { useGeneratePresentation } from '../../hooks/useGeneratePresentation';
export default function GeneratePage() {
    const [formData, setFormData] = useState({
        topic: '',
        description: '',
        audience: '',
        tone: 'Professional',
        language: 'en',
        slideCount: 2,
        theme: 'Default',
        themeShade: 'Light'
    });

    const [themePrompt, setThemePrompt] = useState('');
    const [errors, setErrors] = useState({});

    const { generate, isLoading, error, data, cancel } = useGeneratePresentation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Update theme prompt when theme or shade changes
        if (name === 'theme' || name === 'themeShade') {
            const selectedTheme = name === 'theme' ? value : formData.theme;
            const selectedShade = name === 'themeShade' ? value : formData.themeShade;
            updateThemePrompt(selectedTheme, selectedShade);
        }
    };

    const updateThemePrompt = (theme, shade) => {
        const themePrompts = {
            'Default': {
                'Light': 'Use a clean, minimalist design with white background and subtle gray accents. Focus on readability and simplicity.',
                'Medium': 'Apply a balanced design with light gray backgrounds and medium contrast elements for professional appeal.',
                'Dark': 'Create a sophisticated look with dark gray backgrounds and white text for modern elegance.'
            },
            'Corporate Blue': {
                'Light': 'Design with light blue backgrounds (#F0F8FF) and navy blue (#1E3A8A) accents. Professional and trustworthy appearance.',
                'Medium': 'Use medium blue tones (#3B82F6) with white text and darker blue (#1D4ED8) highlights for corporate presentations.',
                'Dark': 'Apply deep navy blue (#0F172A) backgrounds with bright blue (#60A5FA) accents for executive-level presentations.'
            },
            'Nature Green': {
                'Light': 'Incorporate light green (#F0FDF4) backgrounds with forest green (#166534) text. Eco-friendly and organic feel.',
                'Medium': 'Use medium green (#22C55E) with white text and darker green (#15803D) elements for environmental themes.',
                'Dark': 'Apply deep forest green (#064E3B) with bright green (#34D399) accents for sustainability presentations.'
            },
            'Modern Purple': {
                'Light': 'Design with light purple (#FAF5FF) backgrounds and deep purple (#7C3AED) accents. Creative and innovative feel.',
                'Medium': 'Use medium purple (#8B5CF6) with white text and darker purple (#6D28D9) highlights for tech presentations.',
                'Dark': 'Apply deep purple (#581C87) backgrounds with bright purple (#A78BFA) accents for cutting-edge topics.'
            },
            'Warm Orange': {
                'Light': 'Create with light orange (#FFF7ED) backgrounds and deep orange (#EA580C) text. Energetic and friendly atmosphere.',
                'Medium': 'Use medium orange (#FB923C) with white text and darker orange (#C2410C) elements for dynamic presentations.',
                'Dark': 'Apply deep orange (#9A3412) backgrounds with bright orange (#FDBA74) accents for high-energy topics.'
            },
            'Tech Gray': {
                'Light': 'Design with light gray (#F9FAFB) backgrounds and charcoal (#374151) text. Modern and technological feel.',
                'Medium': 'Use medium gray (#6B7280) with white text and darker gray (#374151) highlights for tech presentations.',
                'Dark': 'Apply dark gray (#111827) backgrounds with light gray (#D1D5DB) accents for sleek, modern appeal.'
            }
        };

        const prompt = themePrompts[theme]?.[shade] || '';
        setThemePrompt(prompt);
    };

    // Initialize theme prompt on component mount
    useEffect(() => {
        updateThemePrompt(formData.theme, formData.themeShade);
    }, [formData.theme, formData.themeShade]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.topic.trim()) {
            newErrors.topic = 'Topic is required';
        }

        if (!formData.audience.trim()) {
            newErrors.audience = 'Target audience is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            // Create the request body that matches your API expectation
            const requestBody = {
                topic: formData.topic,
                description: formData.description ? `${formData.description}. Theme: ${themePrompt} Language : ${formData.language}` : `Theme: ${themePrompt} Language : ${formData.language}`,
                audience: formData.audience,
                tone: formData.tone.toLowerCase(),
                slideCount: parseInt(formData.slideCount)
            };

            console.log('API Request Body:', requestBody);

            const generatedData = await generate(requestBody);

            console.log('Generated Data:', generatedData);

            // Handle successful response here - set data, navigate etc.
            if (generatedData) {
              // For example, store it in local storage, context or state for rendering in another component.
              // localStorage.setItem('presentationSlides', JSON.stringify(generatedData));
            }

        } catch (error) {
            console.error('Error generating presentation:', error);
        }
    };

    const toneOptions = [
        { value: 'Professional', desc: 'Formal and business-oriented' },
        { value: 'Technical', desc: 'Detailed and analytical' },
        { value: 'Casual', desc: 'Relaxed and conversational' },
        { value: 'Creative', desc: 'Innovative and artistic' },
        { value: 'Academic', desc: 'Scholarly and research-focused' },
        { value: 'Persuasive', desc: 'Compelling and influential' }
    ];

    const themeOptions = [
        {
            value: 'Default',
            name: 'Default',
            colors: {
                Light: '#F8FAFC',
                Medium: '#E2E8F0',
                Dark: '#475569'
            }
        },
        {
            value: 'Corporate Blue',
            name: 'Corporate Blue',
            colors: {
                Light: '#DBEAFE',
                Medium: '#3B82F6',
                Dark: '#1E3A8A'
            }
        },
        {
            value: 'Nature Green',
            name: 'Nature Green',
            colors: {
                Light: '#DCFCE7',
                Medium: '#22C55E',
                Dark: '#166534'
            }
        },
        {
            value: 'Modern Purple',
            name: 'Modern Purple',
            colors: {
                Light: '#F3E8FF',
                Medium: '#8B5CF6',
                Dark: '#6B21A8'
            }
        },
        {
            value: 'Warm Orange',
            name: 'Warm Orange',
            colors: {
                Light: '#FED7AA',
                Medium: '#FB923C',
                Dark: '#EA580C'
            }
        },
        {
            value: 'Tech Gray',
            name: 'Tech Gray',
            colors: {
                Light: '#F1F5F9',
                Medium: '#64748B',
                Dark: '#334155'
            }
        }
    ];

    const selectedTheme = themeOptions.find(theme => theme.value === formData.theme);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="relative">
                            <Wand2 className="w-8 h-8 text-indigo-600" />
                            <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-lg"></div>
                        </div>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-4">
                        Generate Presentation
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Transform your ideas into stunning presentations with AI-powered tools. Just describe what you need, and we'll create it for you.
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="space-y-8">
                            {/* Topic Section */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Target className="w-5 h-5 text-indigo-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Topic & Content</h3>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                                        Presentation Topic <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="topic"
                                        name="topic"
                                        type="text"
                                        required
                                        value={formData.topic}
                                        onChange={handleInputChange}
                                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${errors.topic ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="e.g. The Future of AI, Climate Change Solutions, Digital Marketing Strategy"
                                    />
                                    {errors.topic && (
                                        <p className="text-red-500 text-sm mt-1">{errors.topic}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                        Description & Key Points <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="4"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                                        placeholder="Describe what you want to cover. Include key points, target audience, and any specific requirements..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-2">
                                        <Users className="w-4 h-4 inline mr-1" />
                                        Target Audience <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="audience"
                                        name="audience"
                                        type="text"
                                        required
                                        value={formData.audience}
                                        onChange={handleInputChange}
                                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm ${errors.audience ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="e.g. Business executives, College students, Healthcare professionals, General public"
                                    />
                                    {errors.audience && (
                                        <p className="text-red-500 text-sm mt-1">{errors.audience}</p>
                                    )}
                                </div>
                            </div>

                            {/* Style & Tone Section */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Palette className="w-5 h-5 text-indigo-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Style & Tone</h3>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Presentation Tone
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="tone"
                                            name="tone"
                                            value={formData.tone}
                                            onChange={handleInputChange}
                                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm appearance-none cursor-pointer"
                                        >
                                            {toneOptions.map((tone) => (
                                                <option key={tone.value} value={tone.value}>
                                                    {tone.value} - {tone.desc}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Theme Selection
                                    </label>

                                    <div className="space-y-2">
                                        <div className="relative">
                                            <select
                                                name="theme"
                                                value={formData.theme}
                                                onChange={handleInputChange}
                                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm appearance-none cursor-pointer"
                                            >
                                                {themeOptions.map((theme) => (
                                                    <option key={theme.value} value={theme.value}>
                                                        {theme.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Theme Shade Selection */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Theme Shade
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Light', 'Medium', 'Dark'].map((shade) => (
                                                <label key={shade} className="cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="themeShade"
                                                        value={shade}
                                                        checked={formData.themeShade === shade}
                                                        onChange={handleInputChange}
                                                        className="sr-only"
                                                    />
                                                    <div className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${formData.themeShade === shade
                                                        ? 'border-indigo-500 shadow-md'
                                                        : 'border-gray-200 hover:border-indigo-300'
                                                        }`}>
                                                        <div
                                                            className="w-full h-8 rounded-lg mb-2"
                                                            style={{ backgroundColor: selectedTheme?.colors[shade] }}
                                                        ></div>
                                                        <div className="text-sm font-medium text-gray-700">{shade}</div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Theme Prompt Preview */}
                                    {themePrompt && (
                                        <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4">
                                            <h4 className="text-sm font-medium text-indigo-800 mb-2">Theme Style Guide:</h4>
                                            <p className="text-sm text-indigo-700">{themePrompt}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Settings Section */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Settings className="w-5 h-5 text-indigo-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                                            <Globe className="w-4 h-4 inline mr-1" />
                                            Language
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="language"
                                                name="language"
                                                value={formData.language}
                                                onChange={handleInputChange}
                                                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm appearance-none cursor-pointer"
                                            >
                                                <option value="en">English</option>
                                                <option value="es">Spanish</option>
                                                <option value="fr">French</option>
                                                <option value="de">German</option>
                                                <option value="it">Italian</option>
                                                <option value="pt">Portuguese</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="slideCount" className="block text-sm font-medium text-gray-700 mb-2">
                                            <FileText className="w-4 h-4 inline mr-1" />
                                            Number of Slides
                                        </label>
                                        <input
                                            id="slideCount"
                                            name="slideCount"
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={formData.slideCount}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <div className="pt-6 border-t border-gray-200">
                                <button
                                    disabled={isLoading}
                                    onClick={handleSubmit}
                                    className="w-full group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                                >
                                    {/* Background gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Button content */}
                                    <div className="relative flex items-center justify-center space-x-2">
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Generating Presentation...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                                <span>Generate Presentation</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </div>
                                </button>
                                {error && <p className="text-red-500 mt-2">Error: {error.message || 'Something went wrong!'}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}