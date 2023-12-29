import * as React from 'react'
import {
    Aside,
    MyTable,
    Profile,
    Contact,
    AboutMe,
    Logo,
    ThemeSwitcher,
    Skills,
} from 'components'
import { Divider } from '@nextui-org/react'
export default function HomePage() {
    return (
        <div
            className={
                'mb-12 md:mb-0 h-screen w-screen overflow-y-auto flex flex-col md:flex-row'
            }
        >
            <div className={'w-full items-center flex flex-col md:w-1/3'}>
                <div className={'w-full flex justify-between items-center'}>
                    <Logo className={'m-5'} />
                    <ThemeSwitcher className={'block md:hidden'} />
                </div>
                <Profile />
                <div className={'hidden md:block'}>
                    <Contact />
                </div>
                <div className={'w-11/12 md:hidden'}>
                    <Divider className={'mt-6'} />
                </div>
            </div>

            <div
                className={
                    'flex flex-col w-full h-full pl-5 pt-7 pr-2.5 md:pl-20  md:pt-28 md:pr-10'
                }
            >
                <AboutMe className={'mb-5 md:mb-0'} />
                {/*<div className={'flex flex-col mt-16 hidden md:block'}>
                    <p className="text-default-1000 text-5xl font-semibold">
                        Project
                    </p>
                    <MyTable className={'mt-8 mb-16'} />
                </div>*/}
                <div className={'md:hidden'}>
                    <Skills />
                </div>
                <div className={'w-11/12 mt-4 mb-8 md:hidden'}>
                    <Divider />
                </div>
                <div className={'block md:hidden '}>
                    <div className={'w-full items-center flex flex-col'}>
                        <Contact />
                    </div>
                </div>
            </div>
            <Aside className={'hidden md:block'} />
        </div>
    )
}
