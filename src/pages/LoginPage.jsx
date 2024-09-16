import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { UserAuth } from '../components/UserAuth';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        <div className="max-w-md mx-auto">
          <UserAuth mode="login" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
