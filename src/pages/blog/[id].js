import React from 'react'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'

export default function Detail({blog, data}) {
   
  return (
    <div>
        <Layout>
          <div className='container my-3'>
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
                <div className='col-md-4 col-sm-12 col-lg-4'>
                    <div className='container'>
                        {
                            data.map((dt, index)=>
                                <div className='row my-3'>
                                    <div className='col-md-4'> <img src='https://picsum.photos/seed/picsum/100/100'/></div>
                                    <div className='col-md-8'> <Link href={`/blog/${dt.id}`}>{dt.title}</Link> </div>
                                </div>
                                
                            )
                        }
                    
                    </div>
                </div>
              </div>
          </div>
        </Layout>
    </div>
  )
}

export async function getServerSideProps({params}) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await res.json()


    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    const data = await res1.json()
  


    return { 
        props: { 
            blog,
            data,
        } 
    }

  }


  