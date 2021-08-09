import "./App.css";
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Editedsuit from "./Editedsuit";

function App() {
    const [pantColor, setPantColor] = useState("#000000");
    const [shirtColor, setShirtColor] = useState("#CBCBCB");
    const [collarColor, setCollarColor] = useState("#EDEDED");
    const [buttonColor, setButtonColor] = useState("#EDEDED");
    const [courtColor, setCourtColor] = useState("#000000");
    const [showButton, setShowButton] = useState(false);

    const handleChangePantColor = (e) => {
        console.log(e);
        setPantColor(e.target.value);
    };
    const handleChangeShirtColor = (e) => {
        console.log(e);
        setShirtColor(e.target.value);
    };
    const handleChangeCollarColor = (e) => {
        console.log(e);
        setCollarColor(e.target.value);
    };
    const handleChangeButtonColor = (e) => {
        console.log(e);
        setButtonColor(e.target.value);
    };
    const handleChangeCourtColor = (e) => {
        console.log(e);
        setCourtColor(e.target.value);
    };

    // const fov = 2 * Math.atan(900 / aspect / (2 * dist)) * (180 / Math.PI);

    return (
        //
        <div className="container">
            <div className="left">
                <div className="center">
                    Pant Color
                    <label className="color-selector">
                        <span
                            className="circle"
                            style={{ background: pantColor }}
                        />
                        <span>{pantColor}</span>
                        <input
                            type="color"
                            value={pantColor}
                            onChange={handleChangePantColor}
                            className="hidden"
                        />
                    </label>
                </div>
                <div className="center">
                    Shirt Color
                    <label className="color-selector">
                        <span
                            className="circle"
                            style={{ background: shirtColor }}
                        />
                        <span>{shirtColor}</span>
                        <input
                            type="color"
                            value={shirtColor}
                            onChange={handleChangeShirtColor}
                            className="hidden"
                        />
                    </label>
                </div>
                <div className="center">
                    Collar Color
                    <label className="color-selector">
                        <span
                            className="circle"
                            style={{ background: collarColor }}
                        />
                        <span>{collarColor}</span>
                        <input
                            type="color"
                            value={collarColor}
                            onChange={handleChangeCollarColor}
                            className="hidden"
                        />
                    </label>
                </div>
                {showButton && (
                    <div className="center">
                        Button Color
                        <label className="color-selector">
                            <span
                                className="circle"
                                style={{ background: buttonColor }}
                            />
                            <span>{buttonColor}</span>
                            <input
                                type="color"
                                value={buttonColor}
                                onChange={handleChangeButtonColor}
                                className="hidden"
                            />
                        </label>
                    </div>
                )}
                <div className="center">
                    Jacket Color
                    <label className="color-selector">
                        <span
                            className="circle"
                            style={{ background: courtColor }}
                        />
                        <span>{courtColor}</span>
                        <input
                            type="color"
                            value={courtColor}
                            onChange={handleChangeCourtColor}
                            className="hidden"
                        />
                    </label>
                </div>
                <div className="center">
                    <button
                        onClick={() => {
                            setShowButton(!showButton);
                        }}
                    >
                        Show Button ?
                    </button>
                </div>
            </div>
            <div className="right">
                <Canvas camera={{ fov: 50, position: [0, 0, 360] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1.0} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <Editedsuit
                            pantColor={pantColor}
                            shirtColor={shirtColor}
                            collarColor={collarColor}
                            courtColor={courtColor}
                            buttonColor={buttonColor}
                            showButton={showButton}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

export default App;
