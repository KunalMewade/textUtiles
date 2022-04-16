import React,{useState} from "react";


export default function TextForm(props){
     
     const handleUpClick = ()=>{
         console.log("uppercase clicked: " + text);
         let newTxt = text.toUpperCase();
         setText(newTxt);
         props.showAlert("Converted to UpperCase!","success");

     }

     const handleLowClick = ()=>{
         let newLowText = text.toLowerCase(); 
         setText(newLowText);
         props.showAlert("Converted to LowerCase!","success");
     }

     const handleOnChange =(event)=>{
         console.log("onchange")
         
         setText(event.target.value);
     }

     const handleCopy = ()=>{
         var text = document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value);
         document.getSelection().removeAllRanges();
         props.showAlert("Copied to Clipboard","success");
     }

     const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
     }

     const handleClearClick = ()=>{
         let newTxt = '';
         setText(newTxt);
         props.showAlert("Cleared !","success");
     }

    const[text,setText]= useState('');
    // text = "updated text" --- wrong way to update text instead of this we use function setText
    // setText("Updated text");
    return(
    <>    {/*  using jsx fregment we can use more html tages */}
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  id="myBox" value={text} onChange={handleOnChange}  rows="6" className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button  disabled={text.length === 0}  className="btn btn-primary" onClick={handleUpClick} >Convert To Uppercase</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert To Lowercase</button>
            <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text in textbox to preview here"}</p>
        </div>
    </>
    )
}