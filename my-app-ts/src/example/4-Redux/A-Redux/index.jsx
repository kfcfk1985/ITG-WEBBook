import React, { Component } from 'react';
import store from "./store"

class ReduxPage extends Component {



    componentDidMount(){
        //! E.	subscribe 变更订阅
        store.subscribe(()=>{
            console.log("state 发生变化了");
            this.forceUpdate();
        })
    }

    add = ()=>{
        //! D.	dispatch 提交更新
        store.dispatch({
            type:"ADD"
        })
    }
    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                {/* //! C.	getState 获取状态值 */}
                <p>{store.getState()}</p>
                <button onClick={this.add}>加</button>
            </div>
        );
    }
}

export default ReduxPage;
