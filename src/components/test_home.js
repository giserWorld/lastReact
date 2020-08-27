import React ,{ Component }from 'react';
/**************************test_home**********************
 *
 **/
class test_home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_home",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button id="btn1">按钮</button>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default test_home;