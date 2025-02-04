import React from "react";
import { Metadata } from "next";
import Game from "@/components/Games";

export const metadata: Metadata = {
  title: "Game Page - Sports World  | Play for Free Donation",
  description: "This is built by bahadur",
  // other metadata
};

const GamePage = () => {
  return (
    <div className="pb-20 pt-40">
      <Game />
    </div>
  );
};

export default GamePage;
