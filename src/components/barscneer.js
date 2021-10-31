import React from "react";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Barscneer = () => {
  const [data, setData] = useState(false);
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
};

export default Barscneer;
