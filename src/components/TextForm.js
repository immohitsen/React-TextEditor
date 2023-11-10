import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleClrClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }

  const handleLowClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }

  
  const [text, setText] = useState('');

  // setText('New Text');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#0e0e35'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0e0e35'}}
        
        id="myBox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear</button>
    </div>
    <div className="conatiner my-2" style={{color: props.mode==='dark'?'white':'#0e0e35'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter in the text box to preview"}</p>
    </div>
    </>
  )
  }