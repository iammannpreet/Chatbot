"use client";
import React, { useEffect, useRef } from "react";

export default function Chatbot() {
  const convaiRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const convaiElement = document.createElement('elevenlabs-convai');
    convaiElement.setAttribute('agent-id', 'kMIBFByLPOVqITtpiAeC');
    
    if (convaiRef.current) {
      convaiRef.current.appendChild(convaiElement);
    }
    
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    
    return () => {
      if (convaiRef.current) {
        convaiRef.current.innerHTML = '';
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Chatbot</h1>
      <p className="mt-4 text-lg">Use the widget at the bottom right corner for testing.</p>
      <div ref={convaiRef}></div>
    </div>
  );
}