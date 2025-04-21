'use client';

import { useState, useCallback } from 'react';
import MainLayout from './MainLayout';
import VoiceRecognition from '../voice/VoiceRecognition';
import FeatureCard from '../features/FeatureCard';

export default function AppLayout() {
  const [remainingTime, setRemainingTime] = useState('60:00');
  const [isPremium, setIsPremium] = useState(false);

  const features = [
    {
      title: 'AI Voice Friend',
      icon: '🎤',
      description: 'Talk with Joel and improve your pronunciation',
      color: 'bg-primary-blue/20',
      isPremium: !isPremium
    },
    {
      title: 'AI Chat - Sentence Correction',
      icon: '✏️',
      description: 'Type sentences and get instant corrections',
      color: 'bg-primary-mint/20',
      isPremium: !isPremium
    },
    {
      title: 'English to Telugu Translator',
      icon: '🔤',
      description: 'Translate between English and Telugu easily',
      color: 'bg-primary-lavender/20',
      isPremium: false
    },
    {
      title: 'AI Group Discussion',
      icon: '👥',
      description: 'Practice English in an AI-moderated group chat',
      color: 'bg-primary-yellow/20',
      isPremium: !isPremium
    }
  ];

  const handleWakeWord = useCallback(() => {
    // TODO: Implement wake word detection response
    console.log('Wake word detected!');
  }, []);

  const handleFeatureClick = (title: string) => {
    if (!isPremium) {
      // Redirect to subscription page for premium features
      window.location.href = '/subscription';
      return;
    }
    // TODO: Implement feature navigation
    console.log(`Opening feature: ${title}`);
  };

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
            <FeatureCard
              key={index}
              {...feature}
              onClick={() => handleFeatureClick(feature.title)}
            />
          ))}
        </div>

        {/* Voice Recognition */}
        <VoiceRecognition onWakeWordDetected={handleWakeWord} />
      </div>
    </MainLayout>
  );
}