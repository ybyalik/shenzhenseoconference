import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Super Early Bird sale end date: September 30, 2025 midnight GMT+8
      const endDate = new Date('2025-09-30T00:00:00+08:00');
      
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-12" data-testid="countdown-timer">
      <h3 className="text-xl font-semibold mb-6 line-through text-white/60" data-testid="text-countdown-title">
        Super Early Bird Sale Ends In:
      </h3>
      <div className="text-lg text-red-300 font-semibold mb-4">
        Super Early Bird Sale Has Ended
      </div>
    </div>
  );
}
