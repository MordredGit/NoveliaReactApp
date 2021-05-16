import React from "react";
import PropTypes from "prop-types";
import { StyledInfo } from "./Info.styled";

const Info = ({ open, bookID, name, author, date, number }) => {
    return (
        <StyledInfo open={open}>
            <p>{bookID}</p>
            <p>{name} </p>
            <p>{author} </p>
            <p>{date !== "" && date.split('T')[0]} </p>
            <p>{number} </p>
        </StyledInfo>
    );
};
Info.proptype = {
    open: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default Info;