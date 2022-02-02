import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    ${({ flex_last }) => {
        if (flex_last) return "flex: 1;";
    }}
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
export default function FooterHalfPage(props) {
    return (
        <FlexContainer flex_last={props.flex_last}>
            {React.Children.map(props.children, (child) => {
                return <FlexChildren>{child}</FlexChildren>;
            })}
        </FlexContainer>
    );
}
