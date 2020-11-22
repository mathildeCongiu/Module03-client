import React from "react";
import { Link } from "react-router-dom";
import HomeSignUpCard from "../components/public-common/HomeSignUpCard";

function Home() {
  return (
    <div className="home">
      <header>
        <h1>VOLUNT' HERO</h1>
        <div>
          <Link className="header-link link" to="/login">Log In</Link>
          <Link className="header-link link" to="/signup">Sign Up</Link>
        </div>
      </header>

      <main>
        <HomeSignUpCard
          img="bakery-RK.jpg"
          description="Your are a shop and you have leftovers everyday? You feel it’s a pity to throw it and would like to share it with needed people. Contact with an association that will distributed it."
          type="business"
        />
        <HomeSignUpCard
          img="asso01-JM.jpg"
          description="You are an association and you try to give your all so people can access food everyday. Find shops that want to help you to continue doing it."
          type="association"
        />
      </main>

      <footer>
        <Link className="link footer-link" to="/attributions">Attributions</Link>
        <Link className="link footer-link" to="/about-us">About Us</Link>
      </footer>
    </div>
  );
}

export default Home;
