import React, { useState, useEffect } from "react";


const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            if (progress < 100) {
                setTimeout(() => {
                    setProgress((prevProgress) => (prevProgress + 10)); // Increase progress by 10%
                }, 500);
            }
        };

        updateProgress();
    }, [progress]); // The effect depends on the 'progress' value

    return (
        <>
        <h2>Progress Bar</h2>
            <div>
                <div id="barOuter"
                    style={styles.barOuter}
                >
                    <div
                        id="barInner"
                        style={{
                            ...styles.barInner,
                            width: `${progress}%`,
                        }}
                    >
                        {progress}%
                    </div>
                </div>
                <p>{progress}%</p>
                {progress === 100 && <p>Operation Complete!</p>}
            </div>
        </>
    );
};

const styles = {
    barOuter: {
        width: "25%",
        height: "30px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "20px 0",
    },
    barInner: {
        height: "100%",
        backgroundColor: "#4caf50",
        textAlign: "center",
        lineHeight: "30px",
        color: "white",
        transition: "width 1s linear", // Smooth transition
    },
};



export default ProgressBar;