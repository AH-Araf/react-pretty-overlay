import React from 'react';
import '../styles/overlay.css';

const OverlayLeft = ({ image, text, color, transparency, duration, height, width }) => {
    const convertColorToRGBA = (color, transparency) => {
        let r, g, b;
        if (color.startsWith('#')) {
            color = color.slice(1);
            r = parseInt(color.substring(0, 2), 16);
            g = parseInt(color.substring(2, 4), 16);
            b = parseInt(color.substring(4, 6), 16);
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.style.color = color;
            document.body.appendChild(tempDiv);
            const rgb = window.getComputedStyle(tempDiv).color;
            document.body.removeChild(tempDiv);
            const rgbArray = rgb.match(/\d+/g);
            r = parseInt(rgbArray[0], 10);
            g = parseInt(rgbArray[1], 10);
            b = parseInt(rgbArray[2], 10);
        }
        return `rgba(${r}, ${g}, ${b}, ${transparency})`;
    };

    const rgbaColor = convertColorToRGBA(color, transparency);

    return (
        <div className="overlay-container" style={{ height, width }}>
            <img src={image} alt={text} className="company-image" style={{ height, width }} />
            <div className="overlay overlay-left overlay-text-1" style={{ backgroundColor: rgbaColor, transition: `width ${duration} ease-in-out` }}>
                <div className="overlay-text">{text}</div>
            </div>
        </div>
    );
};

export default OverlayLeft;
