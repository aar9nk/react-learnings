import {useState} from 'react';
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [userName, setUserName] = useState('');
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('FORMSTATE', formState)
        }}
        heading="Sign up"
        variant="default"
      >
        <Input type="text" placeholder="username" onChange={(e) => {
            setFormState({
              username: formState.username,
              password: e.target.value,
            })
          setUserName(e.target.value)}}
          />
        
        <Input
          type="text"
          placeholder="password"
          valid={isValid}
          onChange={(e) =>{
            setFormState({
              username: formState.username,
              password: e.target.value,
            })
            e.target.value.length > 3 ? setIsValid(true) : setIsValid(false)
          }}
        />
      </Form>
      <p>Username: {userName}</p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Logging in...");
        }}
        heading="Log in"
        variant="border"
      >
        <Input type="text" placeholder="username" />
        <Input type="text" placeholder="password" />
      </Form>
    </>
  );
}

export default App;
