import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Get Menu!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-white relative"
        style={{ backgroundImage: 'url("/LandingPageImage.jpg")' }}
      >
        <div className="absolute left-10 right-10 top-10 z-20">
          <Navbar />
        </div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl mb-4">Welcome to Eats & Treats!</h1>
          <h3 className="text-3xl mb-4">Great Food, Good Mood</h3>
          <h4 className="text-2xl mb-4">
            "A world of flavors awaits, where every bite tells a story. Dive
            into a realm of exquisite tastes, and let your senses wander."
          </h4>
        </div>
      </section>
      <section
        id="about-us"
        className="flex flex-col justify-center items-center bg-[#3B1C32] p-10 h-screen"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-5 text-white">About Us!</h1>
          <p className="text-xl text-white text-justify mb-5">
            We offer a delightful array of dishes, each crafted to stir the
            senses and tell a tale of culinary artistry. And with each meal, we
            share the secret to its magic — a recipe that lets you recreate the
            experience at home.
          </p>
          <p className="text-xl text-white text-justify mb-5">
            At Eats & Treats, we believe that food is more than just sustenance.
            It's an adventure, a celebration, and a way to connect with others.
            Our platform not only showcases a variety of mouthwatering dishes
            but also empowers you to try them yourself by providing
            easy-to-follow recipes. Whether you're a seasoned chef or a home
            cook, we aim to inspire your culinary journey with flavors that are
            both new and familiar.
          </p>
        </div>
        <Link href="/food">
          <button className="px-6 py-3 bg-[#6A1E55] rounded-md text-xl hover:bg-[#A64D79]">
            Click to See our Menu List!
          </button>
        </Link>
      </section>
    </>
  );
};

export default LandingPage;
