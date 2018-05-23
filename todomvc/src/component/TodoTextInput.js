import React,{Component, PropTypes}from 'react'

class TodoTextInput extends Component{

    handleSubmit = e =>{
        const text = e.target.value.trim()
        if(e.which ===13){
            this.props.onSave(text)
        }
    }
    render(){
        return(
          <input
            type="text"
            autoFocus="true"
            placehold="What needs to be done?"
            className='new-todo'
            onKeyDown={this.handleSubmit.bind(this)}
            />  
        );
    }
}

export default TodoTextInput;