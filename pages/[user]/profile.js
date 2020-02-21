import Layout from '../../components/Layout'
import ProfileCard from '../../components/ProfileCard'
import withApollo from '../../lib/apollo'
import Cookie from 'js-cookie'

function Profile() {

  // const { loading , error, data } = useQuery(GET_USER, { onCompleted: data => {}})
  console.log(Cookie.get('user'))

  return (
    <Layout>
      {/* <ProfileCard loading={loading} error={error} data={data} /> */}
      <button className="bg-gray-600 rounded px-3 py-1 mt-10">
        <a className="text-white" href='/allUsersSample'>See All Users</a>
      </button>
    </Layout>
  )

}
export default withApollo(Profile)