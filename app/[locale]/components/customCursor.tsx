import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: position.y-3,
        left: position.x,
        width: '25px', // Circle size
        height: '25px',
        backgroundColor: 'transparent', 
        pointerEvents: 'none', // Ensure it doesn't block interactions
        transform: 'translate(-50%, -50%)', // Center the circle on the cursor
        zIndex: 1000,
        transition: 'transform 0.5s ease', // Smooth movement
      }}
    />
  );
};

export default CustomCursor;
