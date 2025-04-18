"use client";

import React, { useState } from "react";

import { CheckIcon, CopyIcon } from "lucide-react";

import { Toggle } from "./ui/toggle";

interface CopyButtonProps {
  src: string;
  className?: string;
}
const CopyButton = ({ src, className }: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(src)
      .then(() => {
        setHasCopied(true);

        setTimeout(() => setHasCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy script", err);
      });
  };

  const Icon = hasCopied ? CheckIcon : CopyIcon;
  return (
    <Toggle onClick={handleCopy} className={className}>
      <Icon className="h-3.5 w-3.5" />
    </Toggle>
  );
};

export default CopyButton;
