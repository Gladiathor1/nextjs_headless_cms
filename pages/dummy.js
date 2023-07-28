import React from 'react'
import { getLandingPage } from '../lib/api'


export async function getStaticProps() {

  const pagecontent = await getLandingPage('cp-industry-footer');
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await butter.page.retrieve('*', 'whole-sale-distribution')
  // const posts = await pagecontent.json()
  

  // By returning { props: { posts } }, the Home component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pagecontent,
    },
  }

}
export default function Dummy({ pagecontent })
{
  console.log(pagecontent)
  return (
    
    <div>dummy</div>
  )
}
