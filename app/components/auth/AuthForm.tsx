'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    avatar: '/default-avatar.svg'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-lavender to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-card">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-nunito">
            {mode === 'login' ? 'Welcome Back! 👋' : 'Join the Fun! 🎉'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === 'login' 
              ? 'Ready to continue your English learning journey?'
              : 'Create your account and start learning English with Joel!'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                What's your name?
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose your avatar
              </label>
              <div className="grid grid-cols-4 gap-4">
                {["/default-avatar.svg", "/globe.svg", "/window.svg", "/file.svg"].map((avatar, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`p-2 rounded-xl transition-all ${formData.avatar === avatar ? 'ring-2 ring-primary-blue bg-primary-lavender/20' : 'hover:bg-gray-50'}`}
                    onClick={() => setFormData({ ...formData, avatar })}
                  >
                    <Image
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary-blue hover:bg-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue transition-colors"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {mode === 'login' ? (
              <>Don't have an account? <a href="/signup" className="font-medium text-primary-blue hover:text-primary-blue/80">Sign up</a></>
            ) : (
              <>Already have an account? <a href="/login" className="font-medium text-primary-blue hover:text-primary-blue/80">Sign in</a></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}