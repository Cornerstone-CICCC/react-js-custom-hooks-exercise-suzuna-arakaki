import { useState, useEffect } from "react";

type TimeFormat = "day" | "hour";

export const useTime = (format: TimeFormat): string => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const date = new Date();

    if (format === "day") {
      const dayNameLong = date.toLocaleDateString("en-US", { weekday: "long" });
      setValue(dayNameLong);
    } else if (format === "hour") {
      const hourString = date.getHours().toString();
      setValue(hourString);
    }
  }, [format]);

  return value;
};
