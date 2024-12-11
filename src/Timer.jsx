import React, { useMemo } from "react";
import Countdown from "react-countdown";

const Timer = ({ time, setIsExpire }) => {
  // Convert time to milliseconds for Countdown
  const targetTime = useMemo(() => Date.now() + time * 1000, [time]);

  // Customize the renderer to format the countdown
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setIsExpire(true); // Ensure expiration state is updated when time is up
      return <span>Time is up!</span>; // Message after the countdown completes
    } else {
      return (
        <span>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <div className="timer text-lg font-semibold text-blue-500">
      <Countdown
        onComplete={() => setIsExpire(true)} // Expiry callback on completion
        date={targetTime}
        renderer={renderer}
      />
    </div>
  );
};

export default Timer;
