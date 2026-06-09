"use client";

import React from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";

function Community() {
  return (
    <>
      <Navbar />
      <main className="community-page">
        <section className="community-hero">
          <h1>Community</h1>
          <p>Connect with other Valorant players, share clips, and stay updated.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Community;