import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Banner />
      <HowItWorks />
    </div>
  );
};

export default Home;
