import React from 'react';
import './App.css';


class Odometer extends React.Component{

  constructor(){
    super();
    this.state = {
      display_odometer:0
    }
  };

  inc_mile(value){

    console.log(this.state.display_odometer)
    
    this.setState(
      {display_odometer:this.state.display_odometer+value<=9999 ? this.state.display_odometer + value : this.state.display_odometer+value -9999}
      
      );

  }

  render(){

    return(
      <>
      <button onClick = {()=>this.inc_mile(1)} >Increase One</button>
      <button onClick = {()=>this.inc_mile(10)} >Increase Ten</button>
      <button onClick = {()=>this.inc_mile(100)} >Increase One Hundred</button>
      <button onClick = {()=>this.inc_mile(1000)} >Increase One Thousand</button>

      <h1>{String(this.state.display_odometer).padStart(4, 0)}</h1>

      </>
    );
    
  }

}


function App() {
  return (
    <>
      <Header text='Odometer App'/>
      <Odometer/>
        <Footer trademark='Aghead Albalkhe'/>
    </>
  );
}

function Header(props){

  return(
    <header>
        <p>Weclome To {props.text}</p>
    </header>
  );


}


function Footer(props){
  return(
    <footer>
      Copy Right By @ {props.trademark}
    </footer>
  );
}

export default App;
