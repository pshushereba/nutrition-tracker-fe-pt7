import Layout from '../../components/Layout'
import ProfileCard from '../../components/ProfileCard'
import withApollo from '../../lib/apollo'

function Profile() {


  return (
    <Layout>
      <ProfileCard />
      <button className="bg-gray-600 rounded px-3 py-1 mt-10">
        <a className="text-white" href='/allUsersSample'>See All Users</a>
      </button>
    </Layout>
  )

}
export default withApollo(Profile)