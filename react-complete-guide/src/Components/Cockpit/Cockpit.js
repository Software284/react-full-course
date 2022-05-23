import React,{useEffect,useRef,useContext} from 'react';
import Style from './Cockpit.module.css';
import AuthContext from '../../Context/auth-context';
const Cockpit = (props) => {

  const toggleBtnRef =useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  

  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // setTimeout(()=>{
      //   alert('Saved data to cloud!');
      // },1000);
      toggleBtnRef.current.click();
      return() => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });


    const assignedClasses=[];
    let btnClass='';

    if(props.showPersons)
    {
        btnClass=Style.Red;
    }
    

    if(props.personsLength <=2){
      assignedClasses.push(Style.red);
    }
    if(props.personsLength <=1)
    {
      assignedClasses.push(Style.bold); 
    }

    return(
        <div className={Style.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}
            ref={toggleBtnRef}
            >Toggle Persons</button>
            {/* <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>

            
            
        </div>
       
    );
};

export default React.memo(Cockpit);