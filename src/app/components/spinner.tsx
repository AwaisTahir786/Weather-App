import React from "react";
import Image from "next/image";

function Spinner() {
  return (
    <>
       <Image
          alt="loading.."
          src="/image/spinner.gif"
          width={200}
          height={200}
         
        />
    </>
  );
}

export default Spinner;
