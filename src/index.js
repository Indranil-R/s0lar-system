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



function App() {
    return (
        <>
            <SolarSystem>
                <Sun/>
                <Earth>
                    <Moon/>
                </Earth>
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