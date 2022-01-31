import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    height: max-content;
`;

const FlexChildren = styled.div`
    flex-grow: 1;
    flex-basis: 0px;
    &:nth-child(1) {
        padding-right: 3px;
        border-right: gray solid 1px;
    }
    &:nth-last-child(1) {
        margin-left: 3px;
    }
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
