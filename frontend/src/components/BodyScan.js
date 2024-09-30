import React, { useRef, useEffect } from 'react';

const BodyScan = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  return <video ref={videoRef} autoPlay />;
};

export default BodyScan;
