"use client"
import { useRef } from "react";
import ResumeComponent from "@/components/ui/resume";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (resumeRef.current) {
      const printContents = resumeRef.current.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload to restore the original content
    }
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            margin: 3mm 2.5mm; /* 3mm top/bottom, 2.5mm left/right */
          }
          body {
            margin: 0;
          }
        }
      `}</style>
      <button onClick={handlePrint}>Print Resume</button>
      <div className="mx-auto flex items-center justify-center">
        <div ref={resumeRef}>
          <ResumeComponent />
        </div>
      </div>
    </>
  );
}