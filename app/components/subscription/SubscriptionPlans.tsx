'use client';

import { useState } from 'react';

interface PlanProps {
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: PlanProps[] = [
    {
      price: '₹99',
      duration: '1 Week',
      features: [
        'Unlimited AI Voice Conversations',
        'Unlimited Sentence Corrections',
        'Full Translation Access',
        'Join Group Discussions'
      ]
    },
    {
      price: '₹249',
      duration: '1 Month',
      features: [
        'All Weekly Plan Features',
        'Personalized Learning Path',
        'Progress Analytics',
        'Priority Support'
      ],
      recommended: true
    },
    {
      price: '₹799',
      duration: '3 Months',
      features: [
        'All Monthly Plan Features',
        'Save 20% on Regular Price',
        'Offline Mode Access',
        'Premium Learning Resources'
      ]
    }
  ];

  const handleSubscribe = (price: string) => {
    setSelectedPlan(price);
    // TODO: Implement payment integration
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-lavender to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-nunito mb-2">Choose Your Plan 🌟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock unlimited access to all features and start your journey to English mastery!
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.price}
              className={`relative rounded-2xl shadow-card bg-white p-8 flex flex-col
                ${plan.recommended ? 'ring-2 ring-primary-blue transform scale-105' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-primary-blue px-4 py-1 text-sm font-semibold text-white">
                    Recommended
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.duration} Access</h3>
                <div className="flex items-baseline text-gray-900 mb-6">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/</span>
                  <span className="ml-1 text-xl text-gray-500">{plan.duration.toLowerCase()}</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSubscribe(plan.price)}
                className={`mt-8 w-full rounded-xl px-4 py-3 text-base font-semibold shadow-sm
                  ${selectedPlan === plan.price
                    ? 'bg-primary-blue/80 text-white'
                    : 'bg-primary-blue text-white hover:bg-primary-blue/90'}
                  transition-colors duration-200`}
              >
                {selectedPlan === plan.price ? 'Selected' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 10H2" />
              </svg>
              <span className="text-sm text-gray-600">UPI</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span className="text-sm text-gray-600">QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}