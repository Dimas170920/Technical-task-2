import React from "react"
import {useForm} from 'react-hook-form';
import {compose} from "redux";
import {connect} from "react-redux";
import {deleteU, requestUniversity} from "../redux/university-reducer";

const Form = (props) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data,e) => {
    props.requestUniversity(data.country)
      e.target.reset()

  }
  const CleanUp = () =>{
    props.deleteU()
  }
  return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div><input placeholder="Country" name="country" ref={register}/></div>
          <div><button >Send</button></div>
        </form>
        <div><button onClick={CleanUp}>Clean up</button></div>

      </div>
  );
}

let mapStateToProps = (state) => {
  return {

  }
}

export default compose(
    connect(mapStateToProps, {requestUniversity,deleteU})
)(Form)
