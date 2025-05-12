"use client";

import React, { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";
import Button from "./Button";

const CopyTextArea = () => {
  const [copied, setCopied] = useState(false);
  const text = "kumarwebworks@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className= "mt-8 w-full max-w-3xl px-4">
      <label
        htmlFor="readonly-email"
        className="block text-center text-sm font-medium text-neutral-700 "
      >
        Email us to Report Error
      </label>

      <div className="flex gap-4 ">
        <textarea
          id="readonly-email"
          readOnly
          value={text}
          rows={1}
          className="flex-1  p-3 rounded-lg border  cursor-default resize-none text-gray-800 text-sm font-mono"
        />

        <Button
          onClick={handleCopy}
          aria-label="Copy email to clipboard"
          className="flex items-center gap-2 px-4 py-2   text-sm font-medium rounded-lg "
        >
          {copied ? <Check className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default CopyTextArea;
