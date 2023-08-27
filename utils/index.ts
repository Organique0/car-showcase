import { manufacturers } from "@/constants";
import { Car, FilterProps } from "@/types";
import { env } from "process";

const axios = require('axios');

export async function fetchCars(filters: FilterProps) {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {
            model: filters.model,
            make: filters.manufa,
            year: filters.year,
            limit: filters.limit,
            fuel_type: filters.fuel,
        },
        headers: {
            'X-RapidAPI-Key': env.RapidAPI,
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// definetly not copy pasted
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: Car, params: FilterProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    console.log(params);
    const formattedManufa = params?.manufa?.replace(/ /g, "_");
    const formattedModel = params?.model?.replace(/ /g, "_");
    console.log(formattedManufa);
    console.log(formattedModel);

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', formattedManufa || make);
    url.searchParams.append('modelFamily', formattedModel || model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 