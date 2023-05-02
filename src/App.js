import React from 'react';
import "./App.css"


class App extends React.Component {

  constructor () {
    super()
    this.BtnOne = this.BtnOne.bind(this)
    this.BtnTwo = this.BtnTwo.bind(this)
    this.BtnThree = this.BtnThree.bind(this)
    this.Reset = this.Reset.bind(this)
    this.GetButtonColor = this.GetButtonColor.bind(this)

    this.state = {
    StateBtnOne: 0,
    StateBtnTwo: 0,
    StateBtnThree: 0

  
    }
  }

  GetButtonColor(num) {
   if (num % 2 === 0) {
    return 'green'
   } else {
    return 'white'
   }
  }


  BtnOne() {
    this.setState((prevState, _prop) => ({
      StateBtnOne: prevState.StateBtnOne + 1 
    }), () => {
      console.log(`A cor do botão está: ${this.GetButtonColor()}}`)
    })
  }

  BtnTwo() {
     this.setState((prevState, _prop) => ({
      StateBtnTwo: prevState.StateBtnTwo + 1
     }))
  }

  BtnThree() {
     this.setState((prevState, _prop) => ({
      StateBtnThree: prevState.StateBtnThree + 1
     }))
  }

  Reset() {
    this.setState((prevState, _prop) => ({
      StateBtnOne: 0,
      StateBtnTwo: 0,
      StateBtnThree: 0
    }))
  }

 
  render () {

    const {StateBtnOne, StateBtnTwo, StateBtnThree} = this.state
    return (
      <div className='container'>
        <main>
          <h1>Count Clicks</h1>
          <div className='count-buttons'>
            <button 
            className='BTN-ONE' 
            style={ {backgroundColor: this.GetButtonColor(StateBtnOne) } } 
            onClick={this.BtnOne}>
              <strong>Btn One {StateBtnOne}</strong>
            </button>

            <button 
            className='BTN-TWO' 
            style={ {backgroundColor: this.GetButtonColor(StateBtnTwo) } } 
            onClick={this.BtnTwo}><strong>Btn Two {StateBtnTwo}</strong>
            </button>

            <button className='BTN-THREE' 
            style={ {backgroundColor: this.GetButtonColor(StateBtnThree) } } 
            onClick={this.BtnThree}><strong>Btn Three {StateBtnThree}</strong>
            </button>
          </div>

          <div className='div-reset'>
            <button className='reset' onClick={this.Reset}>Reset</button>
          </div>   
        </main>
        <footer>
          <p>PRODUZIDO POR TAYANE CRISTINA EM 02 DE MAIO DE 2023</p>
        </footer>
      </div>
      )
  }
}

export default App;
