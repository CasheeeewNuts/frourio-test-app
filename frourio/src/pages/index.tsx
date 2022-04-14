import Head from 'next/head'
import {useCallback, useEffect, useState} from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import Layout from '~/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [label, setLabel] = useState('')
  useEffect(() => {
    apiClient.query.$get({
      query: {
        values: [""]
      }
    }).then(setLabel)
  })
  return (
    <Layout>
      <Head>
        <title>frourio-todo-app</title>
      </Head>

      <h1 className={styles.title}>
        <p>{JSON.stringify(label)}</p>
      </h1>

      <p className={styles.description}>frourio-todo-app</p>
    </Layout>
  )
}

export default Home
