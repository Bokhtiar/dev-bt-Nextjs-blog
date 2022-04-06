import Link from 'next/link'
import React from 'react'

export default function Index({data}) {
  return (
    <div>
        <div className='container'>
          <div className='row'>
            {
              data.map((dt, index)=>
                <div className='col-md-3 col-sm-12 col-lg-3 my-4'>
                  <div class="card" style={{ width: "16rem" }}>
                    <img class="card-img-top" src="https://picsum.photos/seed/picsum/100/50" alt="Card image cap" />
                    <div class="card-body">
                      <Link href={`/blog/${dt.id}`}>
                      <h5 class="card-title">{dt.title}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
              
              
          </div>
        </div>
    </div>
  )
}