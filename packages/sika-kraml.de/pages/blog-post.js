import '@app/ondrej-sika.cz/css';
import { withRouter } from 'next/router';
import MainBar from '@app/ondrej-sika.cz/components/MainBar';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

let site = {
  lang: 'cs'
};

let style = {
  fontSize: '1.4em',
  fontWeight: 'bold',
};

import posts from '@app/ondrej-sika.cz/data/blog-posts.yaml'

let posts_id_map = {};
posts.map((element, i) => {
  posts_id_map[element.id] = i
});

class BlogPost extends React.Component {
  render() {
    let post = posts[posts_id_map[this.props.router.query.post_id]];
    return (
      <div>
        <Head>
          <title>{post.title} - Ondřej Šika</title>
        </Head>
        <MainBar
          MainBarHeader={post.title}>
        </MainBar>

        <div className='container pt-4'>
          <ReactMarkdown source={post.content} escapeHtml={false}/>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPost)
