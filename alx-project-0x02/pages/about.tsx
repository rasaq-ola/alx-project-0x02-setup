import React from 'react';
import Header from '../components/layout/Header';

const About = () => {
  return (
    <div>
    <Header/>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <Button label="Small Button" size="small" shape="rounded-sm" />
      <Button label="Medium Button" size="medium" shape="rounded-md" />
      <Button label="Large Button" size="large" shape="rounded-full" />
    </div>
    </div>
  );
}
export default About;
// This code defines a functional component named About that returns a JSX element.
