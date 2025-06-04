import React from 'react';
import Header from '../components/layout/Header'
import Card from '../components/common/Card'

const Home = () => {
    return (
	    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-6">This is the home page of our application.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Card One" content="This is the first card." />
          <Card title="Card Two" content="This is the second card with different content." />
          <Card title="Card Three" content="This card shows how reusable components work." />
        </div>
      </main>
    </div>
    );
    }
export default Home;
