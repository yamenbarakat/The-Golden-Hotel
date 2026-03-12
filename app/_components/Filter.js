"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const filters = [
  { label: "All cabins", value: "all" },
  { label: "2–3 guests", value: "small" },
  { label: "4–7 guests", value: "medium" },
  { label: "8–12 guests", value: "large" },
];

function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClick(term) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", term);

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <nav aria-label="Filter cabins by capacity">
      <ul className="flex flex-wrap border border-primary-800 w-full sm:w-fit text-sm sm:text-base" role="list">
        {filters.map((filter) => (
          <li key={filter.value}>
            <button
              onClick={() => handleClick(filter.value)}
              className={`px-4 sm:px-5 py-2 font-semibold transition-colors hover:bg-primary-700 ${
                activeFilter === filter.value
                  ? "bg-primary-800 text-primary-50"
                  : "text-primary-300 hover:bg-primary-900 hover:text-primary-100"
              }`}
            >
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Filter;
