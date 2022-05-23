import React from 'react';

//this can be treat as Component on jsx element
// const withClass=(props) => (
//     <div className={props.Style}>{props.children}</div>
// );
   //we can receive multiple arguments here and this can be treated as wrapper in class export with aux on jsx
   const withClass = (WrappedComponent,className) => {
        return props => (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
   };
export default withClass;