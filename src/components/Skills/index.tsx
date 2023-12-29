'use client'
import React from 'react'
import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { MyCard } from '../MyCard'
import LinkedInIcon from '../../../public/icon/linkedin.svg'

export const Skills = () => {
    const { theme } = useTheme()
    return (
        <>
            <div className={'pl-10 w-full flex-col hidden md:flex'}>
                <p className={'font-bold text-large mb-10'}>Skills</p>
                <div>
                    <p className={'font-bold text-default-500'}>java script</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={'/icon/javaScript.png'}
                            alt={'java script icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={
                                    'w-3/4 h-full bg-green-50  rounded-lg'
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <div>
                    <p className={'font-bold text-default-500'}>react</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={'/icon/react.png'}
                            alt={'react icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={
                                    'w-3/4 h-full bg-blue-50  rounded-lg'
                                }
                            ></div>
                        </div>
                    </div>
                </div>

                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <div>
                    <p className={'font-bold text-default-500'}>node js</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={'/icon/nodeJs.png'}
                            alt={'node js icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={
                                    'w-3/4 h-full bg-green-50  rounded-lg'
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <div>
                    <p className={'font-bold text-default-500'}>express</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={'/icon/express.png'}
                            alt={'express icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={
                                    'w-3/4 h-full bg-gray-100  rounded-lg'
                                }
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <div>
                    <p className={'font-bold text-default-500'}>next js</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={
                                theme === 'light'
                                    ? '/icon/nextJsLight.png'
                                    : '/icon/nextJsDark.png'
                            }
                            alt={'next js icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={`w-3/4 h-full ${
                                    theme === 'light'
                                        ? 'bg-black'
                                        : 'bg-gray-50'
                                }  rounded-lg`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <div>
                    <p className={'font-bold text-default-500'}>TypeScript</p>
                    <div className={'flex flex-row items-center mt-5'}>
                        <Image
                            src={'/icon/typeScript.png'}
                            alt={'TypeScript icon'}
                            width={'60'}
                            height={'60'}
                        />
                        <div
                            className={
                                'w-full h-3 mx-14 bg-default-0 rounded-lg'
                            }
                        >
                            <div
                                className={
                                    'w-3/4 h-full bg-blue-100  rounded-lg'
                                }
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'md:hidden'}>
                <div className={'mx-12 my-4'}>
                    <Divider />
                </div>
                <p className="text-default-1000 mb-8 text-large md:text-5xl font-semibold">
                    Skills
                </p>
                <div
                    className={
                        'md:pl-4 md:pr-4 grid grid-cols-3 md:grid-cols-4'
                    }
                >
                    <div
                        className={
                            'mb-5 flex flex-col justify-center items-center'
                        }
                    >
                        <Image
                            src={'/icon/javaScript.png'}
                            alt={'TypeScript icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            java script
                        </p>
                    </div>
                    <div
                        className={
                            'mb-5 flex flex-col justify-center items-center'
                        }
                    >
                        <Image
                            src={'/icon/react.png'}
                            alt={'TypeScript icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            react
                        </p>
                    </div>
                    <div
                        className={
                            'mb-5 flex flex-col justify-center items-center'
                        }
                    >
                        <Image
                            src={'/icon/nodeJs.png'}
                            alt={'node js icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            node js
                        </p>
                    </div>
                    <div
                        className={'flex flex-col justify-center items-center'}
                    >
                        <Image
                            src={'/icon/express.png'}
                            alt={'express icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            express
                        </p>
                    </div>
                    <div
                        className={'flex flex-col justify-center items-center'}
                    >
                        <Image
                            src={
                                theme === 'light'
                                    ? '/icon/nextJsLight.png'
                                    : '/icon/nextJsDark.png'
                            }
                            alt={'next js icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            next js
                        </p>
                    </div>
                    <div
                        className={'flex flex-col justify-center items-center'}
                    >
                        <Image
                            src={'/icon/typeScript.png'}
                            alt={'TypeScript icon'}
                            width={'80'}
                            height={'80'}
                        />
                        <p className={'mt-3 mb-6 text-default-600 text-tiny'}>
                            java script
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
