import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { _id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col md:flex-row border-primary-800 border">
      <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto">
        <Image
          src={image}
          alt={`Room ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="border-b md:border-b-0 md:border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-5 sm:px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl mb-3">
            Room {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-base sm:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/rooms/${_id}`}
            className="border-l border-primary-800 py-3 sm:py-4 px-5 sm:px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 text-sm sm:text-base"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
