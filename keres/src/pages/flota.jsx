import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Merienda } from 'next/font/google';
import 'swiper/swiper-bundle.css';

const pacifico = Merienda({ subsets: ['latin'], weight: ['900'] });

const FlotaBgContent = () => {
    return (
        <>
            <Image
                src='/graphics/flota-bg.svg'
                width={300}
                height={300}
                className='absolute z-[-5] top-0 right-1/2 translate-x-1/2 blur-[1px]'
                alt='background graphic'
            />
            <Image
                src='/svg/car-left.svg'
                width={100}
                height={100}
                className='absolute z-[-10] top-0 right-1/2 translate-x-[200%] blur-[2px]'
                alt='background graphic'
            />
            <Image
                src='/svg/car-right.svg'
                width={100}
                height={100}
                className='absolute z-[-10] top-0 right-1/2 translate-x-[-100%] blur-[2px]'
                alt='background graphic'
            />
        </>
    );
};

const trucksTypes = [
    {
        CarName: 'Maja',
        Capacity: 14.2,
        PalletsCapacity: 18,
        Dimensions: [730, 248, 295],
        LoadType: ['bok', 'tył', 'góra'],
        ConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'maja',
    },
    {
        CarName: 'zestaw Maja',
        Capacity: 14.2,
        PalletsCapacity: 18,
        Dimensions: [730, 248, 295],
        LoadType: ['bok', 'tył', 'góra'],
        ConstructionType: 'plandeka',
        TrailerCapacity: 13.5,
        TrailerPalletsCapacity: 20,
        TrailerDimensions: [800, 248, 300],
        TrailerLoadType: ['bok', 'tył', 'góra'],
        TrailerConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'zestaw-maja',
    },
    {
        CarName: 'Gośka',
        Capacity: 1.5,
        PalletsCapacity: 12,
        Dimensions: [490, 245, 285],
        LoadType: ['bok', 'tył', 'góra'],
        ConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'goska',
    },
    {
        CarName: 'Iwonka',
        Capacity: 1.2,
        PalletsCapacity: 10,
        Dimensions: [420, 245, 250],
        LoadType: ['bok', 'tył', 'winda'],
        ConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'iwonka',
    },
    {
        CarName: 'Szaraczek',
        Capacity: 1.2,
        PalletsCapacity: 8,
        Dimensions: [460, 170, 210],
        LoadType: { 'drzwi bok': [120, 178], 'drzwi tył': [143, 177] },
        ConstructionType: 'blaszak',
        AdditionalInformations: '',
        ImageAlias: 'szarak',
    },
    
    {
        CarName: 'Caddy',
        Capacity: 0.5,
        PalletsCapacity: 1,
        Dimensions: [140, 90, 130],
        LoadType: ['drzwi tył'],
        ConstructionType: 'blaszak',
        AdditionalInformations: '',
        ImageAlias: 'caddy',
    },
    {
        CarName: 'Zośka',
        Capacity: 0.5,
        PalletsCapacity: 2,
        Dimensions: [300, 120, 128],
        LoadType: ['drzwi tył'],
        ConstructionType: 'blaszak',
        AdditionalInformations: '',
        ImageAlias: 'zoska',
    },
    {
        CarName: 'Gośka + Lora',
        Capacity: 1,
        PalletsCapacity: 12,
        Dimensions: [490, 245, 285],
        LoadType: ['bok', 'tył', 'góra'],
        ConstructionType: 'plandeka',
        TrailerCapacity: 2.4,
        TrailerDimensions: [800, 225, 60],
        TrailerConstructionType: 'odkryta',
        AdditionalInformations: '',
        ImageAlias: 'lora-goska',
    },
    {
        CarName: 'Szarak + Lora',
        Capacity: 1,
        PalletsCapacity: 8,
        Dimensions: [460, 170, 210],
        ConstructionType: 'blaszak',
        LoadType: ['drzwi tył', 'drzwi bok'],
        TrailerCapacity: 2.4,
        TrailerDimensions: [800, 225, 60],
        TrailerConstructionType: 'odkryta',
        AdditionalInformations: '',
        ImageAlias: 'lora-szarak',
    },
    {
        CarName: 'Gośka + Plandeka',
        Capacity: 1,
        PalletsCapacity: 12,
        Dimensions: [490, 245, 265],
        ConstructionType: 'plandeka',
        LoadType: ['bok', 'tył', 'góra'],
        TrailerCapacity: 2.4,
        TrailerPalletsCapacity: 10,
        TrailerDimensions: [520, 220, 250],
        TrailerLoadType: ['drzwi tył'],
        TrailerConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'zestaw-goska',
    },
    {
        CarName: 'Szarak + Plandeka',
        Capacity: 1,
        PalletsCapacity: 8,
        Dimensions: [460, 170, 210],
        ConstructionType: 'blaszak',
        LoadType: ['drzwi tył', 'drzwi bok'],
        TrailerCapacity: 2.4,
        TrailerPalletsCapacity: 10,
        TrailerDimensions: [520, 220, 250],
        TrailerLoadType: ['drzwi tył'],
        TrailerConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'zestaw-szarak',
    },
    {
        CarName: 'Bogusia',
        Capacity: 28,
        PalletsCapacity: 33,
        Dimensions: [1360, 248, 300],
        LoadType: ['bok', 'tył', 'góra'],
        ConstructionType: 'plandeka',
        AdditionalInformations: '',
        ImageAlias: 'bogusia',
    },
];

const Flota = () => {
    const [activeTruck, setActiveTruck] = useState(trucksTypes[0]);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.realIndex;
        setActiveTruck(trucksTypes[currentSlide]);
    };

    const handleTruckSelect = (event) => {
        const selectedTruck = trucksTypes.find((truck) => truck.CarName === event.target.value);
        setActiveTruck(selectedTruck);
        const selectedIndex = trucksTypes.findIndex((truck) => truck.CarName === event.target.value);
        if (swiperInstance) {
            swiperInstance.slideToLoop(selectedIndex, 0); // immediate transition using slideToLoop
        }
    };

    return (
        <div className='min-h-screen w-screen relative'>
            <Header titleName={'nasza flota'} headerBgContent={<FlotaBgContent />} />
            <div className='flex flex-col items-center backdrop-filter backdrop-blur-xs mx-8 md:mt-0'>
                {activeTruck && (
                    <>
                        <h2
                            className={`${pacifico.className} text-center text-3xl capitalize font-bolder uppercase tracking-tighter text-blue-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)] my-4 md:text-5xl`}>
                            {activeTruck.CarName}
                        </h2>
                        <select
                            onChange={handleTruckSelect}
                            value={activeTruck ? activeTruck.CarName : ''}
                            className='mb-4 p-2 rounded border border-gray-300'>
                            {trucksTypes.map((truck, index) => (
                                <option key={index} value={truck.CarName}>
                                    {truck.CarName}
                                </option>
                            ))}
                        </select>
                        <div className='relative aspect-[2/3] w-full overflow-hidden rounded-lg border border-black md:aspect-square md:w-[70vh]'>
                            <div className='animation animation-face animation-layer4 blur-[2px]' />
                            <div className='absolute flex flex-col items-center justify-evenly top w-full py-5 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 border-b border-gray-300 [&>p>:nth-child(1)]:font-bold'>
                                {activeTruck.Capacity && (
                                    <p>
                                        <span>Ładowność:</span> <span>{activeTruck.Capacity} T</span>
                                    </p>
                                )}
                                {activeTruck.PalletsCapacity && (
                                    <p>
                                        <span>Ładowność palet:</span> <span>{activeTruck.PalletsCapacity}</span>
                                    </p>
                                )}
                                {activeTruck.Dimensions && activeTruck.Dimensions.length > 0 && (
                                    <p>
                                        <span>Wymiary:</span> <span>{activeTruck.Dimensions.join(' x ')} cm</span>
                                    </p>
                                )}
                                {activeTruck.LoadType &&
                                    (Array.isArray(activeTruck.LoadType)
                                        ? activeTruck.LoadType.length > 0 && (
                                            <p>
                                                <span>Sposób załadunku:</span>{' '}
                                                <span>{activeTruck.LoadType.join(', ')}</span>
                                            </p>
                                        )
                                        : Object.keys(activeTruck.LoadType).length > 0 && (
                                            <p>
                                                <span>Sposób załadunku:</span>{' '}
                                                <span>{Object.keys(activeTruck.LoadType).join(', ')}</span>
                                            </p>
                                        ))}
                                {activeTruck.ConstructionType && (
                                    <p>
                                        <span>Typ zabudowy:</span> <span>{activeTruck.ConstructionType}</span>
                                    </p>
                                )}
                                {activeTruck.AdditionalInformations && (
                                    <>
                                        <p>
                                            <span>Dodatkowe informacje:</span>
                                        </p>
                                        <p>{activeTruck.AdditionalInformations}</p>
                                    </>
                                )}
                                {activeTruck.TrailerCapacity && <p className='font-bold pt-1'> Przyczepa</p>}
                                {activeTruck.TrailerCapacity && (
                                    <>
                                        <p>
                                            <span>Ładowność: </span>
                                            <span>{activeTruck.TrailerCapacity} T</span>
                                        </p>
                                    </>
                                )}
                                {activeTruck.TrailerPalletsCapacity && (
                                    <>
                                        <p>
                                            <span>Ładowność palet: </span>
                                            {activeTruck.TrailerPalletsCapacity}
                                        </p>
                                    </>
                                )}
                                {activeTruck.TrailerDimensions && activeTruck.TrailerDimensions.length > 0 && (
                                    <p>
                                        <span>Wymiary:</span>{' '}
                                        <span>{activeTruck.TrailerDimensions.join(' x ')} cm</span>
                                    </p>
                                )}
                                {activeTruck.TrailerLoadType &&
                                    (Array.isArray(activeTruck.TrailerLoadType)
                                        ? activeTruck.TrailerLoadType.length > 0 && (
                                            <p>
                                                <span>Sposób załadunku:</span>{' '}
                                                <span>{activeTruck.TrailerLoadType.join(', ')}</span>
                                            </p>
                                        )
                                        : Object.keys(activeTruck.TrailerLoadType).length > 0 && (
                                            <p>
                                                <span>Sposób załadunku:</span>{' '}
                                                <span>{Object.keys(activeTruck.TrailerLoadType).join(', ')}</span>
                                            </p>
                                        ))}
                                {activeTruck.TrailerConstructionType && (
                                    <p>
                                        <span>Typ zabudowy: </span>
                                        <span>{activeTruck.TrailerConstructionType}</span>
                                    </p>
                                )}
                            </div>
                            <Swiper
                                onSwiper={setSwiperInstance}
                                centeredSlides={true}
                                loop={true}
                                spaceBetween={50}
                                modules={[Pagination]}
                                autoplay={{ delay: 4000 }}
                                className='h-full overflow-hidden bottom'
                                onSlideChange={swiper => handleSlideChange(swiper)}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                style={{
                                    '--swiper-pagination-color': '#F6CF1A',
                                    '--swiper-pagination-bullet-inactive-color': '#4C7FBE',
                                    '--swiper-pagination-bullet-inactive-opacity': '1',
                                    '--swiper-pagination-bullet-size': '8px',
                                    '--swiper-pagination-bullet-horizontal-gap': '8px',
                                }}>
                                {trucksTypes.map((truck, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className='text-black font-solid flex flex-col items-space justify-evenly justify-center'>
                                        <div className='h-1/3'>
                                            <Image
                                                src={`/svg/trucks/${truck.ImageAlias}.svg`}
                                                alt={`${truck.CarType}`}
                                                height={500}
                                                width={750}
                                                className='absolute bottom-[0px] left-1/2 -translate-x-1/2 md:translate-y-[40px]'
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Flota;
