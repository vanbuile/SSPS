import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react';

const PrintPages= [
  { id: 1, name: 'Print All Pages' },
  { id: 2, name: 'Print Current Page' },
  { id: 3, name: 'Print Even Pages' },
  { id: 4, name: 'Print Odd Pages' },
]

const Printside= [
  { id: 1, name: 'Print One Side' },
  { id: 2, name: 'Print Both Side' },
]

const Printcollated= [
  { id: 1, name: 'Collated' },
  { id: 2, name: 'Uncollated' },
]

const Printletter= [
  { id: 1, name: 'Letter' },
  { id: 2, name: 'A4' },
  { id: 3, name: 'A3' },
  { id: 5, name: 'A5' },

]

const PrintPortrait= [
  { id: 1, name: 'Portrait Orientation' },
  { id: 2, name: 'Landscape Orientation' },
]

const PrintMargin= [
  { id: 1, name: 'Normal' },
  { id: 2, name: 'Narrow' },
  { id: 2, name: 'Wide' },
  { id: 3, name: 'Moderate' },
  { id: 4, name: 'Mirrored' },
  { id: 5, name: 'Last Custom Setting' },
]

const Printsheet= [
  { id: 1, name: '1 Page Per Sheet' },
  { id: 2, name: '2 Page Per Sheet' },
  { id: 2, name: '4 Page Per Sheet' },
  { id: 3, name: '6 Page Per Sheet' },
  { id: 4, name: '8 Page Per Sheet' },
  { id: 5, name: '16 Page Per Sheet' },
  
]

export default function ChoosePtintStyle() {
  //box1
  const [selected, setSelected] = useState(PrintPages[0])  
  const [query, setQuery] = useState('')

  const filteredpage =
    query === ''
      ? PrintPages
      : PrintPages.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  useEffect(() => {
  if (selected === PrintPages[0]) {
    document.cookie = `page=1; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`;
  } else if (selected === PrintPages[1] ) {
    document.cookie = `page=2; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
  }
    else if (selected === PrintPages[2] ){
      document.cookie = `page=3; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
  }
    else {
      document.cookie = `page=4; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
  }
  }, [selected]);

  //box2
  const [selected1, setSelected1] = useState(Printside[0])
  const [query1, setQuery1] = useState('')

  const filteredpage1 = query === ''? Printside: Printside.filter((page) => page.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')))

  useEffect(() => {
    if (selected1 === Printside[0]) {
      document.cookie = `side=1; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`;
    }
      else {
        document.cookie = `side=2; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
    }
    }, [selected1]);
  //box3
  const [selected2, setSelected2] = useState(Printcollated[0])
  const [query2, setQuery2] = useState('')

  const filteredpage2 =
    query === ''
      ? Printcollated
      : Printcollated.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  //box4
  const [selected3, setSelected3] = useState(PrintPortrait[0])
  const [query3, setQuery3] = useState('')

  const filteredpage3 =
    query === ''
      ? PrintPortrait
      : PrintPortrait.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  //box5
  const [selected4, setSelected4] = useState(Printletter[0])
  const [query4, setQuery4] = useState('')

  const filteredpage4 =
    query === ''
      ? Printletter
      : Printletter.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  //box6
  const [selected5, setSelected5] = useState(PrintMargin[0])
  const [query5, setQuery5] = useState('')

  const filteredpage5 =
    query === ''
      ? PrintMargin
      : PrintMargin.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  //box7
  const [selected6, setSelected6] = useState(Printsheet[0])
  const [query6, setQuery6] = useState('')

  const filteredpage6 =
    query === ''
      ? Printsheet
      : Printsheet.filter((page) =>
          page.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  useEffect(() => {
    if (selected6 === Printsheet[0]) {
      document.cookie = `sheet=1; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`;
    } else if (selected6 === Printsheet[1] ) {
      document.cookie = `sheet=2; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
    }
      else if (selected6 === Printsheet[2] ){
        document.cookie = `sheet=4; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
    }
      else if(selected6 === Printsheet[3] ){
        document.cookie = `sheet=6; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
    }
    else if(selected6 === Printsheet[4] ){
      document.cookie = `sheet=8; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
    }
    else  {
      document.cookie = `sheet=16; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`; 
   }
    }, [selected6]);

  return (
    <div className="">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-2">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
              displayValue={(page) => page.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            style={{ zIndex: 1 }}
            >
              {filteredpage.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredpage.map((page) => (
                  <Combobox.Option
                    key={page.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-mainBlue text-white' : 'text-gray-900'
                      }`
                    }
                    value={page}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {page.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-mainBlue'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {/* box2 */}
      <Combobox value={selected1} onChange={setSelected1}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery1(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery1('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage1.length === 0 && query1 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage1.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected1, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected1 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected1 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
      </Combobox>
      {/* box3 */}
      <Combobox value={selected2} onChange={setSelected2}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery2(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery2('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage2.length === 0 && query2 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage2.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected2, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected2 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected2 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
     </Combobox>
     {/* box4 */}
     <Combobox value={selected3} onChange={setSelected3}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery3(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery3('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage3.length === 0 && query3 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage3.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected3, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected3 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected3 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
     </Combobox>
     {/* box5 */}
     <Combobox value={selected4} onChange={setSelected4}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery4(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery4('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage4.length === 0 && query4 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage4.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected4, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected4 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected4 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
     </Combobox>
     {/* box6 */}
     <Combobox value={selected5} onChange={setSelected5}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery5(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery5('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage5.length === 0 && query5 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage5.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected5, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected5 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected5 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
     </Combobox>
     {/* box7 */}
     <Combobox value={selected6} onChange={setSelected6}>
       <div className="relative mt-2">
         <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
           <Combobox.Input
             className="w-full border border-textGray rounded-md  py-3 pl-3 pr-10 text-sm leading-6 text-gray-900 focus:ring-0"
             displayValue={(page) => page.name}
             onChange={(event) => setQuery6(event.target.value)}
           />
           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
             <ChevronUpDownIcon
               className="h-5 w-5 text-gray-400"
               aria-hidden="true"
             />
           </Combobox.Button>
         </div>
         <Transition
           as={Fragment}
           leave="transition ease-in duration-100"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
           afterLeave={() => setQuery6('')}
         >
           <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
           style={{ zIndex: 1 }}
           >
             {filteredpage6.length === 0 && query6 !== '' ? (
               <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                 Nothing found.
               </div>
             ) : (
               filteredpage6.map((page) => (
                 <Combobox.Option
                   key={page.id}
                   className={({ active }) =>
                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
                       active ? 'bg-mainBlue text-white' : 'text-gray-900'
                     }`
                   }
                   value={page}
                 >
                   {({ selected6, active }) => (
                     <>
                       <span
                         className={`block truncate ${
                           selected6 ? 'font-medium' : 'font-normal'
                         }`}
                       >
                         {page.name}
                       </span>
                       {selected6 ? (
                         <span
                           className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                             active ? 'text-white' : 'text-mainBlue'
                           }`}
                         >
                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
                         </span>
                       ) : null}
                     </>
                   )}
                 </Combobox.Option>
               ))
             )}
           </Combobox.Options>
         </Transition>
       </div>
     </Combobox>
    </div>
  )
}
