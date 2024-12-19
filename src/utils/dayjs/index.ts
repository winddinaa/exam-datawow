import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import advancedFormat from "dayjs/plugin/advancedFormat";
import isToday from "dayjs/plugin/isToday";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(isToday);
dayjs.extend(duration);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few sec",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%dy",
  },
});

export default dayjs;
