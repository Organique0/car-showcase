export interface ButtonProps {
    title: string,
    ContainerStyles?: string,
    textStyles?: string,
    rightIcon?: string | JSX.Element,
    isDisabled?: boolean,
    handleClick?: () => void,
    btnType?: "button" | "submit",
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[],
}

export interface OptionProps {
    title: string,
    value: string,
}

export interface SearchManufacturerProps {
    manufa: string,
    setManufa: (manufa: string) => void,
}


export interface Car {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
}

export interface CarDetailsProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    car: Car,
    params: FilterProps,
}

export interface FilterProps {
    manufa: string,
    model: string,
    year: number,
    limit: number,
    fuel: string,
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean,
}