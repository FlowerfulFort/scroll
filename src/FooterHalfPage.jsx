import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
`;

const FlexChildren = styled.div`
    flex-grow: 1;
    flex-basis: 0px;
`;
export default function FooterHalfPage({ children }) {
    return (
        <FlexContainer>
            {React.Children.map(children, (child) => {
                return <FlexChildren>{child}</FlexChildren>;
            })}
        </FlexContainer>
    );
}
