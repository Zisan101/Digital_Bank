import React from "react";
import Section1 from "./Components/section1/Section1";
import { Section2 } from "./Components/section2/Section2";

const App = () => {
  const users = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "I've been using this app for a few months now and it's been a game-changer for my financial management.",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "As a small business owner, this app has simplified my accounting processes and helped me keep track of expenses easily.",
      tag: "Underserved",
    },
    {
      image:
        "https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "This app has empowered me to take control of my finances and make informed decisions about my money.",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
