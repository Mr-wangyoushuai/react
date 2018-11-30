// /** 计时器 **/
//
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     )
// }
// setInterval(tick, 1000);
//
// /** 封装计时器 **/
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleDateString()}.</h2>
//         </div>
//     )
// }
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     )
// }
// setInterval(tick, 1000);
//
// /** 将函数转换为类  分5步
//  *
//  * 1.创建一个类 扩展为React.Component
//  *
//  * 2.创建一个 render 空方法
//  *
//  * 3.将函数体转移到render()方法中
//  *
//  * 4.在render方法中，使用this.props 替换 props
//  *
//  * 5.删除剩余的空函数声明
//  * */
//
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.props.date.toLocaleDateString()}.</h2>
//             </div>
//         )
//     }
// }
//
// /**
//  *  为一个类添加局部状态
//  *
//  *  将date从属性移动到状态中去  （ 3 step）
//  *
//  *  1.在render()方法中使用 this.state.date 替代 this.props.date
//  *
//  *  2.添加一个类构造函数来初始化状态 this.state
//  *
//  *  3.从<Clock /> 元素移除date属性
//  */

// class Clock extends React.Component {
//     constructor(props) { // 类构造函数
//         super(props);
//         this.state = {
//             date: new Date(),
//             text: '我是一个好人'
//
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 <h2>{this.state.text}.</h2>
//             </div>
//         )
//     }
// }
// console.log(new Date())
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// )

// 现在的计时器不能更新，接下来我们将计时器实现每面更新一次

/**
 *  将生命周期方法添加到类中
 *
 *  挂载 加载DOM 生成定时器
 *
 *  卸载 移除DOM 清除定时器
 */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);































