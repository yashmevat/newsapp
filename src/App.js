// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    // this.state={mode:"light",pageSize:0};
    this.state = { mode: "light" };
  }
  render() {
    // const decPage= () =>{
    //    if(this.state.pageSize > 0){
    //     this.setState({pageSize:--this.state.pageSize});
    //     console.log(this.state.pageSize)
    //    }
    // }

    // const incPage = () =>{
    //   if(this.state.pageSize < 20)
    //   {
    //     this.setState({pageSize:++this.state.pageSize});
    //     console.log(this.state.pageSize)
    //   }  
    // }

    // const getPageSize=()=>{
    //   return (this.state.pageSize)
    // }
    const toggleMode = () => {
      if (this.state.mode === 'light') {
        this.setState({ mode: "dark" });
        console.log(this.state.mode);
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
        // console.log(document.getElementsByClassName('newsCard'))

        Array.from(document.getElementsByClassName('newsCard')).forEach((elem) => {
          elem.style.color = "white"
          elem.style.backgroundColor = "#042743"
        })
        document.title = 'NewsApp - Dark Mode';
        // console.log(this.state.mode);
        // setInterval(() => {
        //   document.title = 'TextUtils is Amazing Mode';
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Install TextUtils Now';
        // }, 1500);
      }
      else {
        this.setState({ mode: "light" });
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.title = 'NewsApp - Light Mode';
        console.log(this.state.mode);
        Array.from(document.getElementsByClassName('newsCard')).forEach((elem) => {
          elem.style.color = "black"
          elem.style.backgroundColor = "white"
        })
      }

      return this.state.mode;
    }
    return (
      
     
      <div>
        {/* <NavBar mode ={this.state.mode} toggleMode={toggleMode} decPage={decPage} incPage={incPage} pageSize={this.state.pageSize}/> */}
        <HashRouter>
          <NavBar mode={this.state.mode} toggleMode={toggleMode} />
          {/* <News pageSize={20} country="us" category="technology"/> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={20} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={20} country="in" category="business"/>}/>
            <Route exact path="/general" element={<News key="general" pageSize={20} country="in" category="general"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country="us" category="entertainment"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={20} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={20} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={20} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={20} country="in" category="technology"/>}/>
          </Routes>
          </HashRouter>
      </div>
    
    )
  }
}

