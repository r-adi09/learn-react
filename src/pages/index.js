import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile.js'
//import Profile from './qcomps/profile_mistake.js'
import FirstComp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import Profile from './components/profile_props.js'
import Gallery from './qcomps/gallery_props.js'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        <FirstComp/>
        <Bio/>
        <TodoList/>
        <Profile/>
        <Gallery/>
    </div>
  )
}
