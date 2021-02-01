import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    /*setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000); */
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); 

  const style = {
      backgroundColor: 'green',
       Color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
       cursor: 'pointer'
   };

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push('red');
  }
  if (props.personsLength <= 1) {
    classes.push('bold');
  }
   if (props.showPersons) {
    style.backgroundColor = 'red';
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
       <p className={classes.join(' ')}>This is really working!</p>
        <button 
          ref={toggleButtonRef}
          style={style}
          onClick={props.clicked}>Toggle People Visibility</button>
          <button onClick={authContext.login} style={style}>Log in</button>
    </div>
    );
}

export default React.memo(Cockpit);