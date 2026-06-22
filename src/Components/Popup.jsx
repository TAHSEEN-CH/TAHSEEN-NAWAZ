// components/Popup.jsx
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/Theme.Context';


const Popup = ({
    show,
    setShow,
    message,
    type, // 'success' or 'error'
    autoClose = true,
    duration = 5000
}) => {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        if (show && autoClose) {
            const timer = setTimeout(() => {
                setShow(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, autoClose, duration, setShow]);

    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto animate-fadeIn"
                    onClick={() => setShow(false)}
                />

                {/* Popup Card */}
                <div className="relative pointer-events-auto transform transition-all duration-500 ease-out animate-bounceIn w-full max-w-[440px]">
                    <div className={`w-full rounded-2xl shadow-2xl overflow-hidden
      ${type === 'success'
                            ? theme === 'dark'
                                ? 'bg-gradient-to-br from-emerald-900/95 via-emerald-800/95 to-green-800/95 border border-emerald-400/20'
                                : 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 border border-emerald-400/20'
                            : theme === 'dark'
                                ? 'bg-gradient-to-br from-rose-900/95 via-rose-800/95 to-red-800/95 border border-rose-400/20'
                                : 'bg-gradient-to-br from-rose-50 via-red-50 to-rose-100 border border-rose-400/20'
                        }
    `}>
                        {/* Sparkle Particles - Hidden on mobile */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                            <div className={`absolute top-4 right-8 w-1 h-1 rounded-full animate-twinkle
          ${type === 'success' ? 'bg-emerald-300' : 'bg-rose-300'}
        `} />
                            <div className={`absolute bottom-8 left-6 w-1.5 h-1.5 rounded-full animate-twinkle delay-200
          ${type === 'success' ? 'bg-emerald-300' : 'bg-rose-300'}
        `} />
                            <div className={`absolute top-12 left-12 w-1 h-1 rounded-full animate-twinkle delay-500
          ${type === 'success' ? 'bg-emerald-300' : 'bg-rose-300'}
        `} />
                            <div className={`absolute bottom-16 right-10 w-1 h-1 rounded-full animate-twinkle delay-700
          ${type === 'success' ? 'bg-emerald-300' : 'bg-rose-300'}
        `} />
                        </div>

                        {/* Main Content - Responsive padding and sizing */}
                        <div className="relative px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7">
                            <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                {/* Icon - Smaller on mobile */}
                                <div className="relative flex-shrink-0">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl transform rotate-3
              ${type === 'success'
                                            ? theme === 'dark'
                                                ? 'bg-emerald-500/20 text-emerald-400 shadow-emerald-500/20'
                                                : 'bg-emerald-500/10 text-emerald-600 shadow-emerald-500/20'
                                            : theme === 'dark'
                                                ? 'bg-rose-500/20 text-rose-400 shadow-rose-500/20'
                                                : 'bg-rose-500/10 text-rose-600 shadow-rose-500/20'
                                        }
              shadow-lg
            `}>
                                        {type === 'success' ? '🎉' : '😞'}
                                    </div>
                                    <div className={`absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs
              ${type === 'success'
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-rose-500 text-white'
                                        }
              shadow-lg animate-bounce
            `}>
                                        {type === 'success' ? '✓' : '!'}
                                    </div>
                                </div>

                                {/* Text Content - Responsive text sizes */}
                                <div className="flex-1 pt-0 sm:pt-1">
                                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2
              ${type === 'success'
                                            ? theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
                                            : theme === 'dark' ? 'text-rose-300' : 'text-rose-700'
                                        }
            `}>
                                        {type === 'success' ? 'Message Sent!' : 'Oops!'}
                                    </h3>
                                    <p className={`text-xs sm:text-sm leading-relaxed
              ${type === 'success'
                                            ? theme === 'dark' ? 'text-emerald-200/90' : 'text-emerald-800/90'
                                            : theme === 'dark' ? 'text-rose-200/90' : 'text-rose-800/90'
                                        }
            `}>
                                        {message}
                                    </p>
                                </div>

                                {/* Close Button - Smaller on mobile */}
                                <button
                                    onClick={() => setShow(false)}
                                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 text-sm sm:text-base
              ${type === 'success'
                                            ? theme === 'dark'
                                                ? 'hover:bg-emerald-500/20 text-emerald-300'
                                                : 'hover:bg-emerald-500/10 text-emerald-600'
                                            : theme === 'dark'
                                                ? 'hover:bg-rose-500/20 text-rose-300'
                                                : 'hover:bg-rose-500/10 text-rose-600'
                                        }
            `}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1 bg-white/10">
                            <div
                                className={`h-1 transition-all duration-[5000ms] ease-linear
            ${type === 'success'
                                        ? 'bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-400'
                                        : 'bg-gradient-to-r from-rose-400 via-rose-300 to-red-400'
                                    }
          `}
                                style={{
                                    width: '100%',
                                    animation: 'shrinkProgress 5s linear forwards'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Add animations as global styles using style tag */}
            <style jsx>{`
        @keyframes shrinkProgress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.8) translateY(-20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) translateY(0);
            opacity: 1;
          }
          70% {
            transform: scale(0.95) translateY(0);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
        </>
    );
};

export default Popup;