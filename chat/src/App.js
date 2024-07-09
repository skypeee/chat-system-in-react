// 导入必要的依赖
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api"; // 从api模块导入connect和sendMsg函数
import Header from './components/Header/Header'; // 导入Header组件
import ChatHistory from './components/ChatHistory/ChatHistory'; // 导入ChatHistory组件

// 定义App组件，它是一个React类组件
class App extends Component {
  constructor(props) {
    super(props);
    // 初始化state，包含一个空的chatHistory数组
    this.state = {
      chatHistory: []
    };
  }

  // 生命周期方法，在组件挂载后调用
  componentDidMount() {
    // 建立连接并监听收到的新消息
    connect((msg) => {
      console.log("New Message");
      // 更新state，将新消息添加到chatHistory中
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }));
      console.log(this.state);
    });
  }

  // 发送消息的方法
  send() {
    console.log("hello");
    sendMsg("hello");
  }

  // 渲染方法，用于显示组件
  render() {
    return (
      <div className="App">
        <Header /> {/* 渲染Header组件 */}
        <ChatHistory chatHistory={this.state.chatHistory} /> {/* 将chatHistory state作为prop传递给ChatHistory组件 */}
        <button onClick={() => this.send()}>Hit</button> {/* 按钮点击时触发send方法 */}
      </div>
    );
  }
}

export default App; // 导出App组件作为默认导出