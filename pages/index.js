import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Chatruume</h1>
      <p>This is the homepage of the Chatruume project.</p>
      <nav>
        <ul>
          <li>
            <Link href="/recording-videos">
              <a>View Recording Videos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
