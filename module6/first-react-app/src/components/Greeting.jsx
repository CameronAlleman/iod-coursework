import './App.css' //import style

 function Greeting(props) {
    return (
        <div className="GreetingText">   
        {/*if a name is given, the function will return Hello "Name */}
            {props.name && <p>Hello {props.name} </p> || <p>Hello World</p>} 
        </div>
    );
}

export default Greeting