import Filter from "../_components/Filter";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Rooms",
};

export const revalidate = 86000;

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const capacity = params?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-4 sm:mb-5 text-accent-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-primary-200 text-base sm:text-lg mb-8 sm:mb-10">
        Indulge in the finest accommodations at The Golden Hotel. Each of our
        thoughtfully appointed rooms and suites offers a unique blend of
        contemporary elegance and timeless comfort. From intimate king rooms
        to sprawling penthouse suites — every detail has been curated for an
        unforgettable stay. Your sanctuary awaits.
      </p>

      <div className="flex justify-start sm:justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={capacity}>
        <CabinList capacity={capacity} />
      </Suspense>
    </div>
  );
}
