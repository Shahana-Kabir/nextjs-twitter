import type { NextPage } from 'next'
import Link from 'next/link'


const Post: NextPage = () => {
  return (
    <div>
        <h1>Hello to Post page</h1> 
        <h2>
          <Link href = "/">
            <a> Back to homepage</a>
          </Link>
        </h2>
    </div>
  )
}

export default Post;
