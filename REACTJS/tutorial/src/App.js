import React from 'react';
import Example from './example';
import Comments from './Comment';


function Sayhellotouser(props){
 return <h1>{props.name}</h1>
}

const ButtonEl = props => {
return <button onClick={props.onClickHandler}>{props.text}</button>
}


const Login = props => {
  return <ButtonEl text="Login" onClickHandler={props.onClickHandler}/>
}

const Generate = ()=>{
  const onClickHandler = ()=>{
    console.log('clicked')
  }

  return <Login onClickHandler={onClickHandler}/>
}

function handleChange(e){
  console.log(e.target.value)
}

function App() {
  return (
    <div className="App">
      <Sayhellotouser name="Trump"/>
      <Sayhellotouser name="Obama"/>
      <Sayhellotouser name="Kim Jong-Un"/>
      <Generate/>
      <input name="username" onChange={handleChange}/>
      <hr></hr>
      <Example/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <hr></hr>

    </div>
  );
}

export default App;
