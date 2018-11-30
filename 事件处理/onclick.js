

/**
 * 事件处理
 *
 * 1.绑定事件命名采用小驼峰(onClick)，区别html(onclick)
 *
 * 2.事件处理函数 用大括号({})  而html使用双引号 ("")
 *
 * 3.不能使用return false阻止默认行为
 * 必须明确使用e.preventDefault()
 *
 * */

// Toggle组件

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            sex: 'nan'
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () =>{
        console.log(this.setState)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'off'}
            </button>
        )
    }
}
ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)

/**
 * 使方法内this指向类 (3种方法)
 *
 * 1.在constructor 内bind绑定
 *
 * 2.在绑定事件时 使用箭头函数 传参e
 *  onClick={(e) => this.handle(e)}
 *
 * 3.使用属性初始化器
 * 即方法写为  handle = () => {
 *     console.log(111111)
 * }
 */
