'use client';

import Image from "next/image";
import { useState } from 'react';
import MainLayout from './components/layout/MainLayout';

interface FeatureCard {
  title: string;
  icon: string;
  description: string;
  color: string;
}

export default function Home() {
  const [remainingTime, setRemainingTime] = useState('60:00');

  const features: FeatureCard[] = [
    {
      title: 'AI Voice Friend',
      icon: '🎤',
      description: 'Talk with Joel and improve your pronunciation',
      color: 'bg-primary-blue/20'
    },
    {
      title: 'AI Chat - Sentence Correction',
      icon: '✏️',
      description: 'Type sentences and get instant corrections',
      color: 'bg-primary-mint/20'
    },
    {
      title: 'English to Telugu Translator',
      icon: '🔤',
      description: 'Translate between English and Telugu easily',
      color: 'bg-primary-lavender/20'
    },
    {
      title: 'AI Group Discussion',
      icon: '👥',
      description: 'Practice English in an AI-moderated group chat',
      color: 'bg-primary-yellow/20'
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Timer Display */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-6 py-2 shadow-soft">
            <p className="text-sm font-medium">
              Free Time Remaining: <span className="text-primary-blue font-bold">{remainingTime}</span>
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <button
              key={index}
              className={`${feature.color} p-6 rounded-2xl shadow-card hover:shadow-lg transition-shadow
                transform hover:scale-[1.02] transition-transform duration-200 text-left`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Wake Word Indicator */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-primary-blue text-white rounded-full p-4 shadow-lg
            hover:bg-primary-blue/90 transition-colors">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
