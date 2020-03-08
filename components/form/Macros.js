import FormRadio from "./FormRadio";

export default function Macros({ setProfileStep }) {

  const router = useRouter()

  const nameWithoutWhitespace = name => name.trim().split(' ').join('')
  
  const variables = {
    age: parseInt(user.age),
    weight: parseInt(user.weight),
    goal_weight:(user.goalWeight),
    height: parseInt(user.height),
    gender: user.gender,
    activity_level: parseInt(user.activityLevel)
  };

  const [createProfile, {}] = useMutation(CREATE_PROFILE)  
  
  const handleSubmit = async () => {
    // TODO: Needs to also update user w/profile id after successful createProfile
    
    const {
      loading,
      data,
      error
    } = await createProfile({ variables: variables })

    if (error) { 
    }

    if (data) {
      router.push('/[user]/dashboard', `/${nameWithoutWhitespace(user.name)}/dashboard`)  
    }
  }
  // *  Not wired,  no macros in schema? *
  return (
    <>
      <h2 className="text-2xl my-6 self-center">Tracking Macros</h2>
      <h3 className="font-extrabold text-sm self-start px-12 my-4">
        Select all that apply:
      </h3>
      <form className="flex flex-col w-full px-12">
        <FormRadio radioFor="Carbs" formName="macro" />
        <FormRadio radioFor="Fat" formName="macro" />
        <FormRadio radioFor="Protein" formName="macro" />
        <FormRadio radioFor="None" formName="macro" />
      </form>
      <button className="w-full mt-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600" onClick={handleSubmit}>Continue</button>
    </>
  );
}