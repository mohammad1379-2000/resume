import React from 'react'
import { Skills, ThemeSwitcher } from 'components'

export const Aside = ({ className }: { className?: string }) => {
    return (
        <aside
            className={`top-0 right-0 h-screen w-2/5 bg-content1 ${className}`}
        >
            <div className={'h-full flex flex-col items-center'}>
                <div className={'flex items-center h-1/6'}>
                    <div>
                        <ThemeSwitcher />
                    </div>
                </div>
                <Skills />
            </div>
        </aside>
    )
}
