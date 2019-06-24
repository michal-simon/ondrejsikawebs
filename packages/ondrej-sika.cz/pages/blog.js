import '@app/ondrej-sika.cz/css'
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import Link from 'next/link'
import Head from 'next/head'

let site = {
  lang: 'cs'
}

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
}

import posts from '@app/ondrej-sika.cz/data/blog-posts.yaml'


class Blog extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Blog - Ondrej Sika</title>
        </Head>
        <MainBar
          MainBarHeader='Blog'>
        </MainBar>

        <div className="container">
          {
            posts.map((post, i) => {
              return (
                <div key={i}>
                  {
                    (() => {
                      if (i > 0) {
                        return <hr className='hr-black' />
                      }
                    })()
                  }
                  <a style={{color: 'black'}}><Link as={`${post.url}`} href={`/blog-post?post_id=${post.id}`}><h3 className='pt-4 bold'>{post.title}</h3></Link></a>
                  <p>{post.date}</p>
                  <p className='pb-4'>{post.perex} <Link as={`${post.url}`} href={`/blog-post?post_id=${post.id}`}><a>číst dále</a></Link></p>
                </div>
              )
            })
          }
        </div>

      </div>
    );
  }
}

export default Blog
