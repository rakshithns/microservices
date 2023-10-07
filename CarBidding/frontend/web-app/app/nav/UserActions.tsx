'use client'
import { Button, Dropdown } from 'flowbite-react'
import Link from 'next/link'
import { User } from 'next-auth'
import React from 'react'
import { signOut } from 'next-auth/react';
import { HiCog, HiUser } from 'react-icons/hi2';
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai'
import { usePathname, useRouter } from 'next/navigation'
import { useParamStore } from '@/hooks/useParamStore'
type Props = {
    user: User
}
export default function UserActions({user}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamStore(state=> state.setParams);

  function setWinner() {
    setParams({winner: user.username, seller: undefined});
    if (pathname !== '/') router.push('/');
  }

  function setSeller() {
    setParams({seller: user.username, winner: undefined})
    if (pathname !== '/') router.push('/')
  }

  return (
    <Dropdown
      inline
      label={`welcome ${user.name}`}
    >
      <Dropdown.Item icon={HiUser} onClick={setSeller}>
            My Auctions
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy} onClick={setWinner}>
            Auctions won
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href='/auctions/create'>
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
