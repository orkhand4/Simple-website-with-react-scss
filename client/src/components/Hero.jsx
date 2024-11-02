import React from "react";

function Hero() {
  return (
    <main className="main">
      <h2>Welcome!</h2>
      <p>This is a simple website built with React, Vite, and SCSS.</p>
      <section>
        <h3>About Us</h3>
        <p>We provide high-quality solutions for web development.</p>
      </section>
      <section>
        <h3>Contact Us</h3>
        <form>
          <label>Name:</label> <input type="text" placeholder="Your Name" />
          <label>Email:</label> <input type="email" placeholder="Your Email" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Hero;
