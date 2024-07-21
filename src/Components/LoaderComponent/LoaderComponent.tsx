import React, { useEffect, useState } from "react";

interface LoaderComponentProps {}

const LoaderComponent: React.FC<LoaderComponentProps> = ({}) => {
  const [loadingString, setLoadingString] = useState<string>("Loading");
  useEffect(() => {
    if (loadingString.length === 11) {
      setLoadingString("Loading");
      return;
    }
    const intervalID = setInterval(() => {
      setLoadingString((prev) => prev + ".");
      console.log("Add point");
    }, 350);

    return () => clearInterval(intervalID);
  }, [loadingString]);
  return (
    <div className="flex items-center justify-center w-full min-h-full">
      <p>{loadingString}</p>
    </div>
  );
};

export default LoaderComponent;
