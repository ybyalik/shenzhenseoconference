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
      // Conference date: September 17, 2026
      const endDate = new Date('2026-09-17T00:00:00');
      
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
      <h3 className="text-xl font-semibold mb-6" data-testid="text-countdown-title">
        Super Early Bird Sale Ends In:
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="countdown-item px-6 py-4 rounded-lg text-center min-w-24" data-testid="countdown-days">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm text-white/80">Days</div>
        </div>
        <div className="countdown-item px-6 py-4 rounded-lg text-center min-w-24" data-testid="countdown-hours">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm text-white/80">Hours</div>
        </div>
        <div className="countdown-item px-6 py-4 rounded-lg text-center min-w-24" data-testid="countdown-minutes">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm text-white/80">Minutes</div>
        </div>
        <div className="countdown-item px-6 py-4 rounded-lg text-center min-w-24" data-testid="countdown-seconds">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm text-white/80">Seconds</div>
        </div>
      </div>
    </div>
  );
}
