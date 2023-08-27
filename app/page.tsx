"use client";
import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { yearsOfProduction, fuels } from "@/constants";
import { Car } from "@/types";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";

export default function Home() {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufa: manufacturer || '',
        model: model || '',
        year: year || 2023,
        limit: limit || 10,
        fuel: fuel || '',
      });
      setAllCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model])

  const isDataEmpty = allCars.length === 0 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore some cars</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} key={car.model + Math.random()} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <LineWave
                  height="100"
                  width="100"
                  color=""
                  ariaLabel="wave-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
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
