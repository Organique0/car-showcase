import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { yearsOfProduction, fuels } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: { searchParams: FilterProps }) {
  const allCars = await fetchCars({
    manufa: searchParams.manufa || '',
    model: searchParams.model || '',
    year: searchParams.year || 2023,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || '',
  });


  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore some cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} params={searchParams} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="h-[20rem] flex justify-center items-center">
            <h2 className="text-black text-xl font-bold">no results</h2>
          </div>
        )}
      </div>
    </main>
  )
}
