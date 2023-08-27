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
}