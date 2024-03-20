import React, { useState } from 'react'

export default function AboutUs(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#0e0e35',
        backgroundColor: props.mode === 'dark' ? '#0e0e35' : 'white'
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <p>Hey felas, I'm Mohit the developer of this basic app. At the time of building this app, consider me as a newbie. That's why I was into 
                making this kinda project. 
                <br></br><br></br>
                More to come in the coming months and I'll drop some badass projects.<br></br>

                Btw thanks for reaching till here, see ya in other ones.
            </p>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What the heck is this?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Basically a text editor.</strong> I just learned few lines in Reactjs, so just dropped this.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Is it of any use?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Actually yup.</strong> Because I love you more than you do. (your texts i mean)
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Time to be serious
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Hell Yeah!</strong> Okay, So this app's gonna do all the editing stuff for your texts. Write it and you can do
                    anything you desire. 
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
