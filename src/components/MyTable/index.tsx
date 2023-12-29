'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Link,
} from '@nextui-org/react'
import * as React from 'react'

export const MyTable = ({ className }: { className: string }) => {
    return (
        <Table hideHeader className={`${className}`}>
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow className={'h-12'} key="1">
                    <TableCell>name</TableCell>
                    <TableCell>url</TableCell>
                    <TableCell>date</TableCell>
                </TableRow>
                <TableRow className={'h-12'} key="2">
                    <TableCell>noise</TableCell>
                    <TableCell>
                        <Link
                            href={'https://speechnoise.ir'}
                            color="foreground"
                            className={'text-small'}
                        >
                            speechnoise.ir
                        </Link>
                    </TableCell>
                    <TableCell>2022</TableCell>
                </TableRow>
                <TableRow className={'h-12'} key="3">
                    <TableCell>ecogame</TableCell>
                    <TableCell>
                        <Link
                            href={'https://ecogame.ir'}
                            color="foreground"
                            className={'text-small'}
                        >
                            ecogame.ir
                        </Link>
                    </TableCell>
                    <TableCell>2021</TableCell>
                </TableRow>
                <TableRow className={'h-12'} key="4">
                    <TableCell>faslname</TableCell>
                    <TableCell>
                        <Link
                            color="foreground"
                            href={'https://faslname1400.ir'}
                            className={'text-small'}
                        >
                            faslname1400.ir
                        </Link>
                    </TableCell>
                    <TableCell>2021</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
