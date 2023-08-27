"use client";
import { CarDetailsProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const CarDetails = ({ isOpen, setIsOpen, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="
              w-full 
              max-w-md 
              transform 
              overflow-hidden 
              rounded-2xl 
              bg-white 
              text-left 
              align-middle 
              shadow-xl 
              transition-all
              p-8
              "
              >
                <button
                  type="button"
                  className="w-7 h-7 absolute top-[5px] right-[5px] z-10"
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image
                      src="/hero.png"
                      alt='car model'
                      fill
                      priority
                      className='object-contain'
                    />
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src="/hero.png"
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src="/hero.png"
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src="/hero.png"
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.make} {car.model}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key}>
                        <h4 className='text-gray capitalize'>{key.split("_").join(" ")}</h4>
                        <p className='font-semibold text-black-100'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition >
  )
}

export default CarDetails