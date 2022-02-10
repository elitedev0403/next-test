import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import { Context } from '../../store';
import { useContext } from 'react';

const IndexPage = () => {
  const [state, dispatch] = useContext(Context);
  const router = useRouter()
  const {id} = router.query
  let res = [];

  const data = state.data[Number(id)];
  for (let key in data) {
    res.push(
      <div className="">
        <p className="m-4 text-medium">{ `${key} : ${data[key]}`}</p>
      </div>
    )
  }
  return (
  <Layout title="Home | Next.js">
    { res }
  </Layout>
  )
}

export default IndexPage
