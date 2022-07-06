import React from "react";


function twitter() {
    return document.location= 'https://twitter.com/AyodeleNoTime'
}

function linkedin() {
    return document.location='https://www.linkedin.com/in/samson-ayodele-idowu-090497193/'
}
export default function Main() {
    return (
        <main>
            <h2 className="card--name">Samson Ayodele</h2>
            <p className="card--skill">Frontend Developer</p>
            <p><a className="card--link" href="https://github.com/SamsonAyodele">GitHub</a></p>
            <div className="socbtn">
                <button className="btn" onClick= {twitter} target='_blank' type="button">Twitter</button>
                <button className="btn" onClick= {linkedin} target='_blank' type="button">Linkedin</button>
            </div>
                
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h1>interest</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}