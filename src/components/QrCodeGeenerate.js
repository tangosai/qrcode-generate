import React, { useState } from "react";
import QRCode from "qrcode";

const QrCodeGeenerate = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-200 w-full h-screen pt-10">
      <div className="bg-white w-96 px-4 py-5 mx-auto shadow-2xl border-2 border-slate-400 rounded-lg">
        <h1 className="text-center text-xl font-semibold">
          Generate Download QR Code
        </h1>
        <div className="mt-10">
          <input
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm  sm:text-sm mb-4"
            placeholder="Type Anything..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            onClick={() => generateQrCode()}
            className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
          >
            Generate
          </button>
          {imageUrl ? <img src={imageUrl} className="mx-auto mt-10" /> : null}
        </div>
      </div>
    </div>
  );
};

export default QrCodeGeenerate;
