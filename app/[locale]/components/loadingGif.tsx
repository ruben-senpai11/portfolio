"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface Props {
  children: any
}

export default function LoadingGif({ children }: Props) {

  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      setLoading(true); // Show loading when the navigation is pending
    } else {
      setLoading(false); // Hide loading once the transition is complete
    }
  }, [isPending]); // Trigger when transition state changes

  return (
    <>
      {
        loading && (
          <div className="loading-screen">
            <p>Loading...</p>
            {/* Add your custom loader here */}
          </div>
        )
      }
      {children}
    </>
  );
};
