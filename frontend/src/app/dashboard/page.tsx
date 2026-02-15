'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Brain, BookOpen, Zap, Target, TrendingUp, LogOut, Plus, Clock, ChevronRight, Flame } from 'lucide-react';

interface User {
  id: number;
  email: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch {
      router.push('/login');
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1D1D1D] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-xl flex items-center justify-center animate-pulse">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <p className="text-[#A67B9E] text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  const getFirstName = () => {
    if (!user?.email) return 'there';
    return user.email.split('@')[0];
  };

  const features = [
    {
      icon: Brain,
      title: 'Socratic Tutor',
      description: 'Learn through guided questions and discovery',
      color: '#5B4B8A',
      href: '/tutor',
      badge: 'AI Powered',
    },
    {
      icon: BookOpen,
      title: 'Smart Notes',
      description: 'Create and connect your notes with AI',
      color: '#9B5D79',
      href: '/notes',
      badge: null,
    },
    {
      icon: Zap,
      title: 'Flashcards',
      description: 'Spaced repetition for long-term retention',
      color: '#A67B9E',
      href: '/flashcards',
      badge: null,
    },
    {
      icon: Target,
      title: 'Mind Maps',
      description: 'Visualize and connect concepts visually',
      color: '#5B4B8A',
      href: '/mindmaps',
      badge: null,
    },
  ];

  const stats = [
    { label: 'Study Streak', value: '0', unit: 'days', icon: Flame, color: '#9B5D79' },
    { label: 'Notes Created', value: '0', unit: 'total', icon: BookOpen, color: '#5B4B8A' },
    { label: 'Cards Reviewed', value: '0', unit: 'today', icon: Zap, color: '#A67B9E' },
    { label: 'Sessions', value: '0', unit: 'this week', icon: TrendingUp, color: '#9B5D79' },
  ];

  return (
    <div className="min-h-screen bg-[#1D1D1D]">

      {/* Navbar */}
      <nav className="border-b border-[#3A3A3A] bg-[#1D1D1D] sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-[#E7D4D7]">SockRat</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#3A3A3A] rounded-lg border border-[#5B4B8A]/30">
                <div className="w-2 h-2 bg-[#9B5D79] rounded-full"></div>
                <span className="text-[#A67B9E] text-sm">{user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-1.5 text-[#A67B9E] hover:text-[#E7D4D7] hover:bg-[#3A3A3A] rounded-lg transition-all text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Welcome Header */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[#A67B9E] text-sm mb-1 uppercase tracking-widest font-medium">Welcome!</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#E7D4D7]">
                Hey, {getFirstName()}
              </h1>
              <p className="text-[#A67B9E] mt-2">Ready to learn something new today?</p>
            </div>
            <button className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5B4B8A] to-[#9B5D79] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm">
              <Plus className="w-4 h-4" />
              New Session
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]/30 hover:border-[#5B4B8A] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#A67B9E] text-xs font-medium uppercase tracking-wide">{stat.label}</p>
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
              <p className="text-3xl font-bold text-[#E7D4D7]">{stat.value}</p>
              <p className="text-[#A67B9E] text-xs mt-1">{stat.unit}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-[#E7D4D7]">Study Tools</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group p-6 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]/30 hover:border-[#A67B9E] hover:shadow-lg hover:shadow-[#5B4B8A]/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  {feature.badge && (
                    <span className="text-xs px-2 py-1 bg-[#5B4B8A]/30 text-[#A67B9E] rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[#E7D4D7] mb-1 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#A67B9E] text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#A67B9E] group-hover:text-[#E7D4D7] transition-colors text-sm">
                  <span>Open</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Recent Sessions */}
          <div className="p-6 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]/30">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[#E7D4D7]">Recent Sessions</h2>
              <Clock className="w-4 h-4 text-[#A67B9E]" />
            </div>
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-14 h-14 bg-[#1D1D1D] rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-[#5B4B8A]" />
              </div>
              <p className="text-[#E7D4D7] font-medium mb-1">No sessions yet</p>
              <p className="text-[#A67B9E] text-sm mb-4">Start your first learning session</p>
              <button className="px-4 py-2 bg-[#5B4B8A]/20 text-[#A67B9E] hover:bg-[#5B4B8A]/40 hover:text-[#E7D4D7] rounded-lg text-sm transition-all">
                Start Session
              </button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="p-6 bg-[#3A3A3A] rounded-2xl border border-[#5B4B8A]/30">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[#E7D4D7]">Quick Start</h2>
              <Zap className="w-4 h-4 text-[#A67B9E]" />
            </div>
            <div className="space-y-3">
              {[
                { title: 'Ask the Tutor a question', icon: Brain, color: '#5B4B8A', href: '/tutor' },
                { title: 'Create your first note', icon: BookOpen, color: '#9B5D79', href: '/notes' },
                { title: 'Make a flashcard deck', icon: Zap, color: '#A67B9E', href: '/flashcards' },
                { title: 'Build a mind map', icon: Target, color: '#5B4B8A', href: '/mindmaps' },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1D1D1D] transition-all group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}30` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-[#A67B9E] group-hover:text-[#E7D4D7] text-sm transition-colors flex-1">
                    {item.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#5B4B8A] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}