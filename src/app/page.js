// src/app/page.js
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Home</h1>
      <p>
        Your portal is live — go to{' '}
        <a href="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>
          Sign Up
        </a>{' '}
        to register.
      </p>
    </main>
  );
}
