import React from "react";

function ppt() {
    const htmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide 1 - The Lunar Frontier</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com?plugins=typography,forms,aspect-ratio,line-clamp"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'open-sans': ['"Open Sans"', 'sans-serif'],
                    },
                    colors: {
                        'bg-light': '#F5F5F5',
                        'text-dark': '#333333',
                        'accent-blue': '#007BFF',
                        'muted-grey': '#6C757D',
                    },
                    keyframes: {
                        'fade-in-up': {
                            '0%': {
                                opacity: '0',
                                transform: 'translateY(20px)'
                            },
                            '100%': {
                                opacity: '1',
                                transform: 'translateY(0)'
                            },
                        },
                        'fade-in': {
                            '0%': {
                                opacity: '0'
                            },
                            '100%': {
                                opacity: '1'
                            },
                        },
                    },
                    animation: {
                        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                        'fade-in-1': 'fade-in 0.8s ease-out forwards',
                        'fade-in-2': 'fade-in 0.8s ease-out 0.3s forwards',
                        'fade-in-3': 'fade-in 0.8s ease-out 0.6s forwards',
                        'fade-in-staggered': 'fade-in 0.8s ease-out forwards',
                        /* base for staggering */
                    },
                },
            }
        }
    </script>
    <style>
        body {
            opacity: 0;
        }
    </style>
</head>

<body class="h-full w-full transition-opacity duration-700 ease-in opacity-0 bg-bg-light text-text-dark font-open-sans">
    <script>
        window.onload = () => {
            document.body.style.opacity = '1';
        };
    </script>
    <div
        class="w-[100%] aspect-[16/9] mx-auto p-12 flex flex-col justify-center items-center space-y-8 relative overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-cover bg-center opacity-20"
                style="background-image: url('https://images.unsplash.com/photo-1628126830588-41005f564756?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-bg-light via-bg-light/80 to-transparent"></div>
        </div> <!-- Content Area -->
        <div class="relative z-10 text-center max-w-4xl px-8">
            <h1 class="text-4xl font-bold text-text-dark leading-tight mb-6 animate-fade-in-up"> The Lunar Frontier:
                Unlocking New Business Opportunities </h1>
            <p class="text-2xl text-muted-grey mb-4 opacity-0 animate-fade-in-staggered" style="animation-delay: 0.8s;">
                Exploring the strategic importance of Earth's closest celestial neighbor </p>
            <p class="text-2xl text-muted-grey opacity-0 animate-fade-in-staggered" style="animation-delay: 1.1s;">
                Understanding the emerging economic landscape beyond our planet </p>
        </div>
    </div>
</body>

</html>`;

    return (
        <iframe
            srcDoc={htmlCode}
            title="iframe"
            style={{ width: "800px", aspectRatio: "16 / 9" }}
        />
    );
}

export default ppt;
