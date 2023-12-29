import LocationIcon from '../../../public/icon/location.svg'
import { Button, Divider, Link } from '@nextui-org/react'
import MailIcon from '../../../public/icon/mail.svg'
import PhoneIcon from '../../../public/icon/phone.svg'
import DownloadIcon from '../../../public/icon/download.svg'
import { MyCard } from '../MyCard'
import GitHubIcon from '../../../public/icon/github.svg'
import LinkedInIcon from '../../../public/icon/linkedin.svg'
import * as React from 'react'

export const Contact = ({ className }: { className?: string }) => {
    return (
        <>
            <div className={`w-full pl-16 pr-10 ${className}`}>
                <div className={'flex flex-row items-center mb-4'}>
                    <LocationIcon className={'mr-4 fill-default-600'} />
                    <Link
                        href={'https://maps.app.goo.gl/iK7TrPGvn4JGh6Jt9'}
                        className={'text-default-600 text-tiny'}
                    >
                        iran,shiraz
                    </Link>
                </div>
                <Divider className={'mb-4'} />
                <div className={'flex flex-row items-center mb-4'}>
                    <MailIcon className={'fill-default-600 mr-4'} />
                    <Link
                        href="mailto:mohammad1379_2000@hotmail.com"
                        className={'text-default-600 text-tiny'}
                    >
                        mohammad1379 ...
                    </Link>
                </div>
                <Divider className={'mb-4 fill-blue-500'} />
                <div className={'flex flex-row items-center mb-8'}>
                    <PhoneIcon className={'mr-4 fill-default-600'} />
                    <Link
                        href="tel:+989360006171"
                        className={'text-default-600 text-tiny'}
                    >
                        +98 9360006171
                    </Link>
                </div>

                <Button
                    className={'w-full h-14 text-tiny mb-16'}
                    color="primary"
                    variant="solid"
                    startContent={<DownloadIcon />}
                    href={'/CV/CV.pdf'}
                    as={Link}
                    download={'mansouri.pdf'}
                >
                    Download Resume
                </Button>
            </div>
            <div className={`flex flex-row w-full justify-around ${className}`}>
                <MyCard
                    href={'https://github.com/mohammad1379-2000'}
                    Icon={GitHubIcon}
                    iconClassName={'w-28 h-28 md:w-12 md:h-12'}
                />
                <MyCard
                    href={'https://www.linkedin.com/in/mansourii/'}
                    Icon={LinkedInIcon}
                    iconClassName={'w-20 h-20 md:w-12 md:h-12'}
                />
            </div>
        </>
    )
}
