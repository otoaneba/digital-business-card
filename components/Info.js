import React from "react"

export default function Info() {
    return (
        <div>
            <img className="info--img" src="../assets/naoto.png"/>
            <div className="info">
                <h1 className="info--name">Naoto Abe</h1>
                <h4 className="info--title">Full Stack Engineer</h4>
                <h5 className="info--website">website</h5>
                <div className="info--button-container">
                    <button 
                        className="button email"
                        onClick={() => onClickEmail() }>
                        <img src="../assets/Mail.svg"/>Email
                    </button>
                    <button 
                        className="button linkedin"
                        onClick={() => onClickLinkedIn() }>
                        <img src="../assets/linkedin.svg"/>LinkedIn
                    </button>
                </div>

            </div>

        </div>
    )
}

function onClickEmail() {
    window.open('mailto:naotoabe1@gmail.com?subject=I%20would%20like%20to%20connect.')
}

function onClickLinkedIn() {
    window.open('https://www.linkedin.com/in/naotoabe/', '_blank')
}