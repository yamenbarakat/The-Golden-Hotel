"use client";

import {
  differenceInDays,
  isSameDay,
  isWithinInterval,
  isPast,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const today = new Date();
  const fiveYearsFromNow = new Date();
  fiveYearsFromNow.setFullYear(today.getFullYear() + 5);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-8 sm:pt-12 place-self-center px-4"
        classNames={{
          day_button: "!w-[32px] !h-[32px] rdp-day_button hover:bg-accent-500", // ✅ Override day button size
          day: "!w-[32px] !h-[32px] rdp-day", // ✅ Override day cell size
          month_caption:
            "place-self-center h-[var(--rdp-nav-height)] text-lg font-bold flex",
          selected: "bg-accent-500 border-none",
          range_start: "bg-accent-500 rounded-l-full", // Round ONLY left
          range_end: "bg-accent-500 rounded-r-full", // Round ONLY right
          range_middle: "bg-accent-500 rounded-none", // Square corners for middle
        }}
        onSelect={setRange}
        selected={range}
        mode="range"
        startMonth={today}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        endMonth={fiveYearsFromNow}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-8 py-4 bg-accent-500 text-primary-800">
        <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-xl sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base sm:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-xl sm:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
