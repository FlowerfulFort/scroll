import React from "react";
export default function FooterHalfPage({ children }) {
    return (
        <div style={{ display: "flex" }}>
            {React.Children.map(children, (child) => {})}
        </div>
    );
}
