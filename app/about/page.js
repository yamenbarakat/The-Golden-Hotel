import Image from "next/image";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-x-24 lg:gap-y-32 text-base sm:text-lg items-center">
      <div className="lg:col-span-3">
        <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-accent-400 font-medium">
          Welcome to The Golden Hotel
        </h1>

        <div className="space-y-8">
          <p>
            Where timeless elegance meets modern luxury. Nestled in the heart
            of the city, The Golden Hotel is your sanctuary from the everyday.
            From the moment you arrive, our dedicated team ensures every detail
            of your stay is nothing short of perfection.
          </p>
          <p>
            Our {cabins.length} exquisitely designed rooms and suites offer a
            refined retreat for every occasion &mdash; whether you&apos;re here for
            business, romance, or a well-deserved family escape. Each space is
            thoughtfully appointed with premium furnishings, bespoke amenities,
            and breathtaking views.
          </p>
          <p>
            At The Golden Hotel, we believe that true luxury lies in the details.
            It&apos;s the warmth of genuine hospitality, the serenity of your
            private suite, and the feeling that every moment has been crafted
            just for you.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 overflow-hidden rounded-sm">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
          alt="The Golden Hotel grand lobby with golden lighting"
          width={800}
          height={600}
          className="object-cover w-full h-full"
          quality={80}
        />
      </div>

      <div className="relative lg:col-span-2 overflow-hidden rounded-sm">
        <Image
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80"
          alt="The Golden Hotel infinity pool with stunning city views"
          width={800}
          height={800}
          className="object-cover w-full h-full"
          quality={80}
        />
      </div>

      <div className="lg:col-span-3">
        <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-accent-400 font-medium">
          A legacy of excellence since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Golden Hotel has stood as a beacon of refined
            hospitality. What began as a vision to create a truly extraordinary
            guest experience has grown into one of the most celebrated luxury
            hotels in the region &mdash; built on a foundation of care, passion, and
            an unwavering commitment to excellence.
          </p>
          <p>
            Across six decades, we have welcomed heads of state, celebrated
            artists, and discerning travellers who return year after year.
            Our heritage is not merely about history &mdash; it is about the
            relationships we build and the memories we help create. When you
            stay with us, you are not just a guest; you are part of our story.
          </p>

          <div>
            <a
              href="/rooms"
              className="inline-block mt-4 bg-accent-500 px-6 sm:px-8 py-4 sm:py-5 text-primary-950 text-base sm:text-lg font-semibold uppercase tracking-widest hover:bg-accent-400 transition-all"
            >
              Explore our rooms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
