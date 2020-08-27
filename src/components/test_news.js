import React ,{ Component }from 'react';
/**************************test_news**********************
 *
 **/
class test_news extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_news",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <input defaultValue='输入值'></input>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default test_news;