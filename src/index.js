import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function SolarSystem({children}) {
    return (
        <div className="solar">
            {children}
        </div>
    );
};

function Sun() {
    return (
        <div className='sun'>
        </div>
    );
};

function Earth({children}) {
    return (
        <div className='earth'>
            {children}
        </div>
    );
}

function Moon() {
    return (
        <div className='moon'>

        </div>
    );
};

function Footer() {
    return (
        <p className='footer'>Inspired by <a
            href="https://gist.github.com/TheEngineersDeskPk/023113a78ae6b1f34bed1475a203ba7a">@TheEngineersDeskPk</a> on
            Github </p>
    );
};

function App() {
    return (
        <>
            <SolarSystem>
                <Sun/>
                <Earth>
                    <Moon/>
                </Earth>
                <Footer/>
            </SolarSystem>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)