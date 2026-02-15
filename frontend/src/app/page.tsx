// src/app/page.tsx
'use client'
import Link from 'next/link';
import { ArrowRight, Brain, BookOpen, Zap, Target, Users, TrendingUp } from 'lucide-react';
import { fira_sans } from './layout';
import { useEffect, useState } from 'react';
export default function HomePage() {
  return (

<div className="min-h-screen bg-[#1D1D1D]">
  {/* Navigation */}
  <nav className="container mx-auto px-4 sm:px-6 py-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">S</span>
        </div>
        <span className="text-xl sm:text-2xl font-bold text-[#E7D4D7]">
          SockRat
        </span>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Link 
          href="/login"
          className="px-4 sm:px-6 py-2 text-sm sm:text-base text-[#E7D4D7] hover:text-[#A67B9E] transition-colors font-medium"
        >
          Login
        </Link>
        <Link 
          href="/signup"
          className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#5B4B8A] text-white rounded-lg hover:bg-[#9B5D79] transition-colors font-medium"
        >
          Get Started
        </Link>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block mb-4 px-4 py-2 bg-[#3A3A3A] text-[#A67B9E] rounded-full text-xs sm:text-sm font-medium">
        AI-Powered Active Learning Platform
      </div>
      
      <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold mb-6 leading-tight text-[#E7D4D7]">
        Learn Deeply Through{' '}
        <span className="text-[#A67B9E]">
          Intelligent Conversation
        </span>
      </h1>
      
      <p className={` ${fira_sans.className} text-lg sm:text-2xl lg:text-xl text-[#E7D4D7] opacity-80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto`}>
        SockRat transforms passive learning into active understanding. Using proven study techniques 
        and guided learning, it help you truly master concepts instead of just memorizing them.
      </p>
      
      <div className="flex flex-col text-xs sm:flex-row items-center justify-center gap-4">
        <Link 
          href="/signup"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5B4B8A] to-[#9B5D79] text-white rounded-xl hover:opacity-90 transition-opacity font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
        >
          Start Learning Free
          <ArrowRight className="w-5 h-5" />
        </Link>
    
      </div>

      <div className={`${fira_sans.className} mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 sm:text-2xl text-[#A67B9E]`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#9B5D79] rounded-full"></div>
          No credit card required
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#9B5D79] rounded-full"></div>
          Free forever plan
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#9B5D79] rounded-full"></div>
          AI-powered learning
        </div>
      </div>
    </div>
  </section>

  {/* Features Grid */}
  <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E7D4D7]">
        Everything You Need to{' '}
        <span className="text-[#A67B9E]">Learn Effectively</span>
      </h2>
      <p className={`${fira_sans.className} text-base sm:text-xl text-[#E7D4D7] opacity-80 max-w-2xl mx-auto`}>
        Powerful tools designed around proven learning science principles
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {/* Feature 1 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#5B4B8A] rounded-lg flex items-center justify-center mb-4">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Socratic Tutor</h3>
        <p className={`${fira_sans.className}  sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          Our tutor doesn&apos;t just answer questions, it questions you back. Learn through guided discovery 
          and develop critical thinking skills naturally.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#9B5D79] rounded-lg flex items-center justify-center mb-4">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Smart Note-Taking</h3>
        <p className={`${fira_sans.className} text-sm sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          Create, organize, and connect your notes. The AI automatically finds relevant 
          information from your past notes when you need it.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#A67B9E] rounded-lg flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Intelligent Flashcards</h3>
        <p className={`${fira_sans.className} text-sm sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          Auto-generate flashcards from your notes. Spaced repetition algorithm ensures 
          you review at optimal intervals for long-term retention.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#5B4B8A] rounded-lg flex items-center justify-center mb-4">
          <Target className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Mind Maps</h3>
        <p className={`${fira_sans.className} text-sm sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          Visualize complex topics as interactive mind maps. See connections between 
          concepts and build a deeper understanding of the material.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#9B5D79] rounded-lg flex items-center justify-center mb-4">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Progress Tracking</h3>
        <p className={`${fira_sans.className} text-sm sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          Monitor your learning journey with detailed analytics. See what&apos;s working 
          and stay motivated with streaks and achievements.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A] hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all">
        <div className="w-12 h-12 bg-[#A67B9E] rounded-lg flex items-center justify-center mb-4">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#E7D4D7]">Context-Awareness</h3>
        <p className={`${fira_sans.className} text-sm sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
          The tutor remembers your learning journey. It references your notes and past 
          conversations to provide personalized, relevant guidance.
        </p>
      </div>
    </div>
  </section>

  {/* How It Works */}
  <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <div className="max-w-4xl mx-auto bg-[#3A3A3A] rounded-3xl p-6 sm:p-12 border border-[#5B4B8A]">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xlxl font-bold mb-4 text-[#E7D4D7]">How SockRat Works</h2>
        <p className={`${fira_sans.className} text-3xl sm:text-2xl text-[#A67B9E]`}>
          Active learning in three simple steps
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="flex gap-4 sm:gap-6 items-start">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#5B4B8A] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
            1
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#E7D4D7]">Ask Questions, Get Questions Back</h3>
            <p className={`${fira_sans.className} text-3xl sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
              Instead of spoon-feeding answers, our  tutor guides you through understanding 
              by asking thought-provoking questions. This Socratic approach builds deeper comprehension.
            </p>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 items-start">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#9B5D79] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
            2
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#E7D4D7]">Build Your Knowledge Base</h3>
            <p className={`${fira_sans.className} text-3xl sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
              Create notes, generate flashcards, and build mind maps. Everything is searchable 
              and interconnected. The AI uses your knowledge base to provide personalized help.
            </p>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 items-start">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#A67B9E] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
            3
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#E7D4D7]">Review and Master</h3>
            <p className={`${fira_sans.className} text-3xl sm:text-xl text-[#E7D4D7] opacity-70 leading-relaxed`}>
              Use spaced repetition flashcards to commit knowledge to long-term memory. 
              Track your progress and see your understanding deepen over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <div className="max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]">
          <div className="text-4xl sm:text-5xl font-bold text-[#A67B9E] mb-2">
            3x
          </div>
          <p className="text-sm sm:text-base text-[#E7D4D7] opacity-70">
            Better retention than passive reading
          </p>
        </div>
        <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]">
          <div className="text-4xl sm:text-5xl font-bold text-[#A67B9E] mb-2">
            85%
          </div>
          <p className="text-sm sm:text-base text-[#E7D4D7] opacity-70">
            Students report deeper understanding
          </p>
        </div>
        <div className="p-6 sm:p-8 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]">
          <div className="text-4xl sm:text-5xl font-bold text-[#A67B9E] mb-2">
            24/7
          </div>
          <p className="text-sm sm:text-base text-[#E7D4D7] opacity-70">
            AI tutor available whenever you need
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#A67B9E]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Ready to Transform Your Learning?
      </h2>
      <p className="text-base sm:text-xl mb-8 opacity-90">
        Join other students in learning more effectively with SockRat
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          href="/signup"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#5B4B8A] rounded-xl hover:bg-[#E7D4D7] transition-colors font-semibold text-base sm:text-lg"
        >
          Get Started Free
        </Link>
        <Link 
          href="/login"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#3A3A3A] text-white rounded-xl border-2 border-white hover:bg-[#1D1D1D] transition-colors font-semibold text-base sm:text-lg"
        >
          Sign In
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-[#3A3A3A]">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
        <span className="font-semibold text-[#E7D4D7]">SockRat</span>
      </div>
      
      <div className="flex gap-4 sm:gap-6 text-sm text-[#A67B9E]">
        <Link href="#" className="hover:text-[#E7D4D7] transition-colors">About</Link>
        <Link href="#" className="hover:text-[#E7D4D7] transition-colors">Features</Link>
        <Link href="#" className="hover:text-[#E7D4D7] transition-colors">Contact</Link>
      </div>
      
      <p className="text-[#A67B9E] text-xs sm:text-sm">
        © 2026 SockRat. All rights reserved.
      </p>
    </div>
  </footer>
</div>
)}