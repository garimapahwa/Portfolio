import { useEffect, useMemo, useState } from "react";

export function useLocalTime(timeZone) {
  const format = useMemo(
    () => new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }),
    [timeZone]
  );
  const [time, setTime] = useState(() => format.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format.format(new Date())), 15_000);
    return () => clearInterval(id);
  }, [format]);

  return time;
}
