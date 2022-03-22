import React, { useState } from "react";

function App() {
         //variable    //method         //state 
  const [headingText, setHeadingText] = useState("Hello, ");
  const [isMousedOver, setMouseOver] = useState(false); //enter in page
        //name
  const [name, setName] = useState("")






  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value); //input name
  }
  
  function handleClick(event) {
    setHeadingText("Hello, "+name);

    event.preventDefault(); //onClick gonna be the page refreshed
  }



  return (
    <div className="container">
      <h1>{headingText}</h1>
      {/* onClick={} */}
      <form onSubmit={handleClick}>
      
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
        
        <button type="submit"
                style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                value={name}
        >Submit</button>
      </form>      
    </div>
  );
}

export default App;
