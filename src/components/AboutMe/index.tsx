import * as React from 'react'
import { MyCard } from '../MyCard'
import ResponsibilityIcon from '../../../public/icon/responsibility.svg'
import ProbleSolvingSkillsIcon from '../../../public/icon/probleSolvingSkills.svg'
import PerseveranceIcon from '../../../public/icon/perseverance.svg'
import TimeManagementIcon from '../../../public/icon/timeManagement.svg'

export const AboutMe = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <p className="text-default-1000 text-large md:text-5xl font-semibold">
                About me
            </p>
            <p className="text-default-600 text-tiny leading-relaxed pt-8">
                I am Mohammad Mansouri, a software engineer with 4 years of
                experience in the information technology industry.
                <br />I was born in Shiraz, Iran and graduated from Fasa
                University with a Bachelor of Science in Computer Engineering.
                <br />I have strong skills in software development, algorithm
                design, and problem solving and I am looking for an opportunity
                to use these skills to contribute to the development of
                innovative software products.
                <br />
                In recent years, I have worked on the development of several
                successful software projects in various fields, including
                e-commerce, education, and entertainment.
                <br />I am a passionate and motivated individual who is always
                looking to learn new things.
                <br />I believe that technology can make the world a better
                place and I am eager to play a role in that.
            </p>

            <div
                className={
                    'pt-14 md:pl-4 md:pr-4 grid grid-cols-2 md:grid-cols-4'
                }
            >
                <MyCard
                    className={'mb-5 md:mb-10'}
                    label={'Perseverance'}
                    Icon={PerseveranceIcon}
                    iconClassName={'w-20 h-20 md:w-12 md:h-12'}
                />
                <MyCard
                    className={'mb-5 md:mb-10'}
                    label={'ProbleSolvingSkills'}
                    Icon={ProbleSolvingSkillsIcon}
                    iconClassName={'w-20 h-20 md:w-12 md:h-12'}
                />
                <MyCard
                    className={'mb-5 md:mb-10'}
                    label={'TimeManagement'}
                    Icon={TimeManagementIcon}
                    iconClassName={'w-20 h-20 md:w-12 md:h-12'}
                />
                <MyCard
                    className={'mb-5 md:mb-10'}
                    label={'Responsibility'}
                    Icon={ResponsibilityIcon}
                    iconClassName={'w-20 h-20 md:w-12 md:h-12'}
                />
            </div>
        </div>
    )
}
