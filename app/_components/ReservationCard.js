import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    _id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    createdAt,
    cabin: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800">
      <div className="relative w-full md:w-auto h-48 md:h-32">
        <img
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover w-full h-full border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-5 sm:px-6 py-4 md:py-3 flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap gap-4 mt-auto items-baseline">
          <p className="text-lg sm:text-xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-base sm:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-row md:flex-col border-t md:border-t-0 md:border-l border-primary-800 w-full md:w-[100px]">
        <a
          href={`/account/reservations/edit/${_id.toString()}`}
          className="group flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 border-r md:border-r-0 md:border-b border-primary-800 flex-grow px-3 py-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Edit</span>
        </a>
        <DeleteReservation bookingId={_id.toString()} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default ReservationCard;
