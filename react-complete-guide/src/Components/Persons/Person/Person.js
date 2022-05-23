import React,{Component} from 'react';
import Style from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context';

class Person extends Component{

    static contextType = AuthContext;

    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render()
    {
        console.log('[Person.js] rendering...');

        //Defining JSX Method 1
        // return (
        //     <div className={Style.Person}>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // )
        //Defining JSX Method 2
        // return [
        //     <p key="43j" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="kjdfk">{this.props.children}</p>,
        //     <input key="jkdsljf" type="text" onChange={this.props.changed} value={this.props.name} />
        //      ]
        //Defining JSX Method 3
        // return(
        //     <Auxiliary>
        //         <p  onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />

        //         </Auxiliary>
        // )
        //Defining JSX Method4
        // return(
        //     <React.Fragment>
        //         <p  onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </React.Fragment>
        // )
        //Defining JSX Method5
        // return (
        //     <WithClass Style={Style.Person}>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //         </WithClass>
        // )

        return (
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {context => 
                    context.authenticated ? <p>Authenticated!</p>:<p>Please log in</p>
                    }
                </AuthContext.Consumer> */}

                {this.context.authenticated ? <p>Authenticated!</p>:<p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}
                //  ref={(inputEl) => {this.inputElement=inputEl}}
                ref={this.inputElementRef}
                 />
            </Auxiliary>
        )

       
    }

    //npm install --save prop-types
  

    // const rnd=Math.random();
    // if(rnd > 0.7)
    // {
    //     throw new Error('Something went wrong');
    // }
    // return <p> I'm a Person and i am {Math.floor(Math.random() * 30)} years old!</p>
    
}
Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

export default WithClass(Person,Style.Person); 


// const style={
//     '@media (min-width: 500px)' :{
//         width:'450px'
//     }