'use client'
import { Button, Dropdown } from 'flowbite-react'
import Link from 'next/link'
import { User } from 'next-auth'
import React from 'react'
import { signOut } from 'next-auth/react';
import { HiCog, HiUser } from 'react-icons/hi2';
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai'
type Props = {
    user: Partial<User>
}
export default function UserActions({user}: Props) {
  return (
    <Dropdown
      inline
      label={`welcome ${user.name}`}
    >
      <Dropdown.Item icon={HiUser}>
        <Link href='/'>
            My Auctions
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy}>
        <Link href='/'>
            Auctions won
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href='/'>
            Sell My car
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href='/session'>
            Session (dev only)
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider></Dropdown.Divider>
      <Dropdown.Item icon={AiOutlineLogout} onClick={() => signOut({callbackUrl: '/'})}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  )
}