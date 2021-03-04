import React from "react"
import {compose} from "redux";
import {connect} from "react-redux";
import University from "./University";

const UniversityContainer = (props) => {
    return <University university={props.university} />
}

let mapStateToProps = (state) => {
    return {
        university: state.universityPage.university,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(UniversityContainer)