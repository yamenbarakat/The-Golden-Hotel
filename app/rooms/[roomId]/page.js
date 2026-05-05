import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { roomId } = await params;

  const { name } = await getCabin(roomId);
  return { title: `Room ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ roomId: String(cabin._id) }));

  return ids;
}

export default async function Page({ params }) {
  const { roomId } = await params;

  const cabin = await getCabin(roomId);

  if (!cabin) {
    notFound();
  }

  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-6 sm:mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 border border-primary-800 py-4 lg:py-3 px-5 sm:px-8 lg:px-10 mb-16 lg:mb-24">
        <div className="relative lg:scale-[1.15] lg:-translate-x-3">
          <img src={image} alt={`Room ${name}`} />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-5 lg:translate-x-[-254px] bg-primary-950 p-4 sm:p-6 pb-1 lg:w-[150%]">
            Room {name}
          </h3>

          <p className="text-base sm:text-lg text-primary-300 mb-8 sm:mb-10">
            {description}
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                Located in{" "}
                <span className="font-bold">The Golden Hotel</span>, city centre
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-base sm:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10 text-accent-400">
          Reserve Room {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
