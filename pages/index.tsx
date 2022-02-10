import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useContext } from 'react';
import { Context } from '../store';

const IndexPage = () => {
  const [state, dispatch] = useContext(Context);
  
  useEffect(() => {
    fetch('https://unstats.un.org/sdgapi/v1/sdg/Target/List?includechildren=false')
    .then(response => response.json())
    .then((list) => {
      dispatch({type: 'putData', payload: list});
    })
  }, []);

  let res = [];
  if (state.data && state.data.length) {
    for (let i = 0; i < 17; ++ i) {
      const item = state.data[i];
      res.push(
        <Link href={ `/goal/${i}` }>
        <div className="hover:text-white hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
          <h2 className="text-center m-4 font-bold">{ item['code'] }</h2>
          { item['title'] }
        </div>
        </Link>
      )
    }
  }
  return (
    <Layout title="Home | Next.js">
      <div className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        { res }
      </div>
    </Layout>
  )
}

export default IndexPage
