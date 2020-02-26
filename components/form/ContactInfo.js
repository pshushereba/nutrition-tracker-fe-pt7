import FormInput from "../form/FormInput";

export default function() {
  return (
    <>
      <h2 className="text-xl font-extrabold my-4">Sign Up</h2>
      <form className="flex flex-col w-full">
        <FormInput
          content="Your Name"
          placeHolder="First and Last Name"
          type="text"
        />
        <FormInput
          content="E-mail"
          placeHolder="email@email.com"
          type="email"
        />
        <FormInput content="Password" placeHolder="password" type="password" />
        <FormInput
          content="Verify Password"
          placeHolder="password"
          type="password"
        />
      </form>
      <h3 className="font-bold my-6">
        You're one step closer to achieving your goals
      </h3>
    </>
  );
}
