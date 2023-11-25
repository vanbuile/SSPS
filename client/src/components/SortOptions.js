import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function SortOptions({onChange, option , type, }) {
  const handleChangeListbox = (event) => {
      let value = event.target.value
      onChange(value)
  }
  return (
    
      <Listbox value={selected} onChange={handleChangeListbox}>
        <div className="relative mt-1 w-auto">
          <Listbox.Button 
            className={`${ type ? 'shadow-md py-2' : 'border border-mainBlue py-1'
                  } cursor-pointer relative w-auto hover:bg-opacity-30 bg-white  pl-3 pr-7 text-left rounded-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
          >
            <span className="block truncate font-semibold">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <ChevronUpDownIcon
                className="h-5 w-5 text-darkBlue"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options  className="z-40 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {option.map((opt, optIdx) => (
                <Listbox.Option
                  key={optIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-6 ${
                      active ? 'bg-BgBlue-200 text-darkBlue' : 'text-gray-900'
                    }`
                  }
                  value={opt}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {opt.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

  )
}
