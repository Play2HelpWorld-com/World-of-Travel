import React from "react";
import { Metadata } from "next";
import BoosterCard from "@/components/Boosters";

export const metadata: Metadata = {
  title: "Rewards Page - Travel World  | Play for Free Donation",
  description: "This is built by Bahadur",
  // other metadata
};

const BoostersPage = () => {
  return (
    <div className="pb-20 pt-40">
      <BoosterCard />
    </div>
  );
};

export default BoostersPage;
