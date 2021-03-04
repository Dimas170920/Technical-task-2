import React from "react"
import {Table} from "./Table/Table";

const University = (props) => {
    return<div>
            {(props.university)?
                ((props.university.length===0)?<div>Incorrect Request</div> :<Table university={props.university} />)
                :<div></div>}
        </div>

}

export default University

