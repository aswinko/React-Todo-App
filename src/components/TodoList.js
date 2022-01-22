import React, {Component} from "react";
import './TodoList.css';

class TodoList extends Component{

    state = {
        input: "",
        items: []
    }

    handleChange = (event) =>{
        this.setState({
            input: event.target.value
        });
        console.log(this.state.input);
    }


    storeItems =  (event) => {
        event.preventDefault();


        const {input} = this.state;

        //Normal way to push eklements in array

        // const allItems = this.state.items;
        // allItems.push(input);

        //Advance way using spread operators

        if (this.state.input !==''){

            this.setState({
                // items: allItems
    
                items: [...this.state.items, input],
                input: ""
            });
        }

    }

    deleteItems = (key) => {

        //Normal way to delete elements in array
        // const allItems = this.state.items;
        // allItems.splice(key, 1);

        this.setState({
            // items: allItems
            //Advance way using filter 
            items: this.state.items.filter((data, index) => index != key)
        });
    }

    editItems(key) {
        //console.log("items:"+this.state.task);
         const item = this.state.items;
         item.map(item=>{
             if(item===key){
                 //console.log(item.key +"    "+key)
                 // item.text= text.title;
             }
         })
         this.setState({
             items: item,
         });
    }



    render(){
        //Destructuring
        const {input, items} = this.state;
        
        console.log(items);
        
        return(
            <div className="todo-container">
                <form action="" className="input-section" onSubmit={this.storeItems}>
                    <h2>Todo List</h2>
                    <input type="text" className=""
                    onChange={this.handleChange} 
                    value={input}  
                    placeholder="Enter Items ....." />
                    <input className="submit-button" type="submit" value="Add" />
                </form>

                <ul>
                    {items.map((data, index) =>(
                        <li key={index}>
                            {data} 
                            <i className="far fa-edit" id="edit-button" onClick={(edit)=>this.editItems(edit.target.value)}></i>
                            <i className="far fa-trash-alt" id="delete-button" onClick={() => this.deleteItems(index)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;