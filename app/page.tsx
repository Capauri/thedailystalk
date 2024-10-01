"use client"

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Twitter App</h1>
      <Link href="/login">Login with X</Link>
    </div>
  );
};

export default HomePage;
