import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hello</p>
    </div>
  )
}

