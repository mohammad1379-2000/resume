import { Logo } from '../Logo'
import { Avatar } from '@nextui-org/react'
import * as React from 'react'

export const Profile = ({ className }: { className?: string }) => {
    return (
        <div className={'w-full flex flex-row md:flex-col items-center'}>
            <div className="aspect-square h-52 md:h-80">
                <Avatar
                    src={'/avatar/Profile.png'}
                    name={'mohammad mansouri'}
                    className="h-full w-full"
                />
            </div>
            <div className={'w-full h-full flex flex-col items-center'}>
                <p
                    className={
                        'text-default-1000 text-medium md:text-6xl font-semibold mt-3 mb-1 pr-1 pl-1'
                    }
                >
                    Mohammad
                </p>
                <p
                    className={
                        'text-default-1000 text-medium md:text-6xl font-semibold mt-4 mb-6'
                    }
                >
                    Mansouri
                </p>
                <p
                    className={
                        'text-default-600 text-tiny md:text-small md:mb-14'
                    }
                >
                    full stack developer
                </p>
            </div>
        </div>
    )
}
