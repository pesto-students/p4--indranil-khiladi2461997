import React from "react";
import { useState } from "react";
import Footer from "../../Footer/jsx/Footer";
import InputField from "../../InputField/jsx/InputField";
import "../css/Main.css";
import axios from 'axios';

export default function Main() {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const fetchData = async () => {
  try {
    const response = await axios(
      `https://api.shrtco.de/v2/shorten?url=${userInput}`
    );
    setShortenedLink(response.data.result.full_short_link);
  } catch (e) {
    console.log(e);
  }
};
  return (
    <div className="main">
      <div>
        <h1>More than just shorter links </h1>
        <span>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </span>
      </div>

      <InputField
        userInput={userInput}
        setUserInput={setUserInput}
        shortenedLink={shortenedLink}
        setShortenedLink={setShortenedLink}
        fetchData={fetchData}
      />
      <Footer />
    </div>
  );
}
