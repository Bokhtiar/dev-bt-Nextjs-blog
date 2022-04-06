import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'



export default function Home({data}) {
  return (
    <div>
      <Layout>
        asdfasdfadsf{data.length}
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()

  return { props: { data } }
}
