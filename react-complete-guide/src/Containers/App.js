import React, { Component } from 'react';
import Style from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import AuthContext from '../Context/auth-context';

class App extends Component {

  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  //update lifecycle
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('[App.js] shouldComponentUdpate');
    return true;
  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate');
  }

  state = {
    persons: [
      { id:'asfa1',name: 'Max', age: 28 },
      { id:'vasdf1',name: 'Manu', age: 29 },
      { id:'asdf11',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons:false,
    showCockpit:true,
    changeCounter:0,
    authenticated: false
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  };


  deletePersonHandler = (personIndex) => {
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event,id) => {
     const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
     });

     const person={
       ...this.state.persons[personIndex]
     };

  

     person.name=event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex]=person;

     this.setState((prevState,props) => {
        return {
            persons:persons,
            changeCounter:prevState.changeCounter+1
        };
     });



  }

  togglePersonHandler = () => {
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow});
  }



  render() {

    console.log('[App.js] render');


     let persons=null;
     if(this.state.showPersons){
       persons=
            <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
            />;
     }


     
      
        return (
          
        <div className={Style.App}>
        <button onClick={()=>{this.setState({showCockpit:false});}}>Remove Cockpit</button>
        <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
        {this.state.showCockpit ? <Cockpit title={this.props.appTitle}
        personsLength={this.state.persons.length}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonHandler}
        />
        :null}
        {persons}
        </AuthContext.Provider>
      </div>
    
    );
     
    
  }

}

export default App;


























//npm run eject for enabling css feature
//State Management With Functional Component.in functional component we can create multiple state with useState
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   });


//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Stephanie", age: 27 }
//       ],
//       otherState: personsState.otherState
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Mahesh Lamichhane</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default App;

/* React Basic Steps 
  npm install create-react-app -g
  create-react-app react-complete-guide --scripts-version 1.1.5
  npm start
*/

/* For pseudo selectors and media queries
  npm install --save radium
*/
// import React, { Component } from 'react';
// import Radium,{StyleRoot} from 'radium';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {

//   state = {
//     persons: [
//       { id:'asfa1',name: 'Max', age: 28 },
//       { id:'vasdf1',name: 'Manu', age: 29 },
//       { id:'asdf11',name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPerson:false
//   }

//   // switchNameHandler = (newName) => {
//   //   //don't do this this.state.persons[0].name = 'Maximilian';
//   //   this.setState({
//   //     persons: [
//   //       { name: newName, age: 28 },
//   //       { name: "Manu", age: 29 },
//   //       { name: "Stephanie", age: 27 }
//   //     ]
//   //   })
//   // }

//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice();
//     const persons=[...this.state.persons];
//     persons.splice(personIndex,1);
//     this.setState({persons:persons});
//   }

//   nameChangedHandler = (event,id) => {
//      const personIndex = this.state.persons.findIndex(p => {
//         return p.id === id;
//      });

//      const person={
//        ...this.state.persons[personIndex]
//      };

//      // This is for alternative of spread operator const person=Object.assign({},this.state.persons[personIndex]);

//      person.name=event.target.value;
//      const persons = [...this.state.persons];
//      persons[personIndex]=person;

//      this.setState({persons:persons});


//   }

//   togglePersonHandler = () => {
//       const doesShow=this.state.showPerson;
//       this.setState({showPerson:!doesShow});
//   }



//   render() {

//     const style = {
//        backgroundColor: 'green',
//        color:'white',
//         font: 'inherit', 
//         border: '1px solid blue',
//          padding: '8px',
//           cursor: 'pointer' ,
//           ':hover':{
//             backgroundColor:'lightgreen',
//             color:'black'
//           }
//         };

//      let persons=null;
//      if(this.state.showPerson){
//        persons=(
//         <div >
//             {this.state.persons.map((person,index) => {
//               return <Person 
//                name={person.name}
//                age={person.age} 
//                click={() => this.deletePersonHandler(index)}
//                key={person.id}
//                changed={ (event) => this.nameChangedHandler(event,person.id)}
//                />
//             })}

        // { <Person
        //   name={this.state.persons[0].name}
        //   age={this.state.persons[0].age} />

        // <Person
        //   name={this.state.persons[1].name}
        //   age={this.state.persons[1].age}
        //   click={this.switchNameHandler}
        //   changed={this.nameChangedHandler} >My Hobbies</Person>

        // <Person
        //   name={this.state.persons[2].name}
        //   age={this.state.persons[2].age} /> 

//         </div>
//        );

//        style.backgroundColor='red';
//        style[':hover']={
//         backgroundColor:'salmon',
//         color:'black'
//       };
//      }

//     //  let classes=['red','bold'].join(' ');
//       const classes=[];
//       if(this.state.persons.length <=2){
//         classes.push('red');
//       }
//       if(this.state.persons.length <=1)
//       {
//         classes.push('bold'); 
//       }
      
//         return (
//           <StyleRoot>
//         <div className="App">
//         <h1>Mahesh Lamichhane</h1>
//         <p className={classes.join(' ')}>This is really working!</p>
//         {/* <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
//         <button style={style} 
//         // onClick={this.switchNameHandler.bind(this, 'Maximilian')} 
//            onClick={this.togglePersonHandler}
//         >Toggle Persons</button>

//          {/* For Conditional Rendering {this.state.showPerson === true ?<div>Show</div>   :null} */}

//          {persons}
//       </div>
//       </StyleRoot>
//     );
     
    
//   }

// }

// export default Radium(App);
