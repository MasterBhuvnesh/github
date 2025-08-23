"use client";

import React from "react";

interface BannerButtonProps {
  url?: string;
  label?: string;
}

const BannerButton: React.FC<BannerButtonProps> = ({
  url = "https://bkp5.gdgrbu.tech",
  label = "BKP 5.0 is live",
}) => (
  <button
    className="bg-blue-500 text-white mt-2 rounded-3xl text-center py-1 px-3 text-sm font-medium focus:outline-none hover:bg-blue-600 transition w-auto inline-block"
    onClick={() => window.open(url, "_blank")}
  >
    {label}
  </button>
);

export default BannerButton;
