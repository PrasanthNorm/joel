'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  icon: string;
  description: string;
  color: string;
  isPremium?: boolean;
  onClick?: () => void;
}

export default function FeatureCard({
  title,
  icon,
  description,
  color,
  isPremium = false,
  onClick
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${color} w-full p-6 rounded-2xl shadow-card hover:shadow-lg
        transform hover:scale-[1.02] transition-all duration-200 text-left
        relative overflow-hidden ${isPremium ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
    >
      <div className="flex items-start space-x-4 relative z-10">
        <div className="text-4xl transform transition-transform duration-200
          ${isHovered ? 'scale-110 rotate-12' : ''}">
          {icon}
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {isPremium && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-yellow text-gray-800">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L13 5.414V9a1 1 0 11-2 0V5.414L9.707 6.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Premium
              </span>
            )}
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 transform rotate-45 scale-150">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full
                ${color.replace('20', '40')}
                animate-float`}
              style={{
                top: `${i * 40}%`,
                left: `${i * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {isPremium && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center p-4 rounded-xl bg-white/80 shadow-soft">
            <svg className="w-8 h-8 mx-auto text-primary-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-sm font-medium text-gray-800">Unlock with Premium</p>
          </div>
        </div>
      )}
    </button>
  );
}