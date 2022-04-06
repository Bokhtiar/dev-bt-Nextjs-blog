import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Detail({blog}) {
   
  return (
    <div>
        <Layout>
          <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-sm-12 col-lg-8'>
                    <div className='container'>
                        <img src='https://picsum.photos/seed/picsum/700/400'  />
                        <h2 className='container'>{blog.title}</h2>
                        <div>
                            {blog.body}
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 col-lg-4'></div>
              </div>
          </div>
        </Layout>
    </div>
  )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await res.json()
    return { props: { blog } }
  }
