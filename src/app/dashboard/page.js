// File: src/app/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    // 1) Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
      } else {
        setSession(session);
      }
    });

    // 2) Subscribe to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push('/login');
      else setSession(session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!session) {
    return <p style={{ padding: '2rem', fontFamily: 'system-ui' }}>Loading…</p>;
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
      {/* Your protected content goes here */}
    </main>
  );
}
