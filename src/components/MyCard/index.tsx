import * as React from 'react'
import { Link } from '@nextui-org/react'

export const MyCard = ({
    className,
    Icon,
    iconClassName,
    href,
    label,
}: {
    className?: string
    Icon: React.FC<{ className: string | undefined }>
    iconClassName?: string
    href?: string
    label?: string
}) => {
    if (href) {
        return (
            <Link href={href}>
                <div className={'flex flex-col items-center'}>
                    <div
                        className={
                            'w-44 h-44 md:w-32 md:h-32 rounded-3xl bg-content2 flex items-center justify-center'
                        }
                    >
                        <Icon className={'fill-default-500 ' + iconClassName} />
                    </div>
                    {label && (
                        <p className={'text-tiny text-default-500 mt-3'}>
                            {label}
                        </p>
                    )}
                </div>
            </Link>
        )
    } else {
        return (
            <div className={'flex flex-col items-center mb-10 md:mb-14'}>
                <div
                    className={
                        'w-44 h-44 md:w-32 md:h-32 rounded-3xl bg-content2 flex items-center justify-center ' +
                        className
                    }
                >
                    <Icon className={'fill-default-500 ' + iconClassName} />
                </div>
                {label && (
                    <p className={'text-tiny text-default-500 md:mt-3'}>
                        {label}
                    </p>
                )}
            </div>
        )
    }
}
