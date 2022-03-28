import React,{useState} from "react";


export default function TextForm(props){
     
     const handleUpClick = ()=>{
         console.log("uppercase clicked: " + text);
         let newTxt = text.toUpperCase();
         setText(newTxt)
     }

     const handleLowClick = ()=>{
         let newLowText = text.toLowerCase(); 
         setText(newLowText)
     }

     const handleOnChange =(event)=>{
         console.log("onchange")
         
         setText(event.target.value);
     }

     const handleCopy = ()=>{
         var text = document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value);
     }

     const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
     }

     const handleClearClick = ()=>{
         let newTxt = '';
         setText(newTxt);
     }

    const[text,setText]= useState('');
    // text = "updated text" --- wrong way to update text instead of this we use function setText
    // setText("Updated text");
    return(
    <>    {/*  using jsx fregment we can use more html tages */}
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  id="myBox" value={text} onChange={handleOnChange}  rows="6" className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert To Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text in textbox to preview here"}</p>
        </div>
    </>
    )
}