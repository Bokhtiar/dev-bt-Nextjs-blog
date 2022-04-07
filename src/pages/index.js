import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Search from '../components/Layout/Search/Search'
import Blog from '../components/Blog/Index'



export default function Home({data}) {
  return (
    <div>
      <Layout>
        <Search></Search>
        <Blog data={data}></Blog>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()

  return { props: { data } }
}
