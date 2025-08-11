import { useState } from "react";
import { motion } from "motion/react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "merafif28@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight
     bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      {copied ? (
        <motion.p
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          key={copied}
        >
          <img
            src="assets/copy-done.svg"
            alt="copy done icon"
            className="w-5"
          />
          Email Has Copied
        </motion.p>
      ) : (
        <motion.p
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          key={copied}
        >
          <img src="assets/copy.svg" alt="copy icon" className="w-5" />
          Copy Email Address
        </motion.p>
      )}
    </motion.button>
  );
}

export default CopyEmailButton;
