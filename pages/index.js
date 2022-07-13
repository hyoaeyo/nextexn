import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button onClick={()=>router.push('/about')}>about</button>  
      <button onClick={()=>router.push('/profile')}>profile</button>
    </div>
  )
}
