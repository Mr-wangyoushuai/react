

/** 类扩展组件 */

class Welcome extends React.Component {
    render() {
        return <div>
            Hello, {this.props.name}
        </div>
    }
}

/** 函数组件  */

function Coming(props) {
    return <h1>
        <Welcome name="sara" />
        I'm{props.age}years old.
    </h1>
}
const ele = <Coming age="18"/>

// ReactDOM.render(
//     ele,
//     document.getElementById('root')
// )
/** 这个ReactDOM.render 会被下面的 覆盖 */

/////////////////////////////////////////////////////////
/** 提取组建  **/

//数据
const comment = {
    author: {
        name: 'John',
        avatarUrl: './img/girl.png'
    },
    text: 'I\'m a sunshine boy',
    date: new Date()
}

// 处理时间
function formatDate(date) {
    return date.toString()
}
/*
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">

                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
*/

/** 头像  **/
function Avatar (props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
             width="100"
        />
    )
}

/** 个人信息UserInfo组件  **/

function UserInfo(props) {
    return (
        <div className="UserInfo" style={props.style}>
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

const style1 = {
    background: 'red',
    color: 'green',
    fontSize: '20px'
};
/** 最终组件整合成  */

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo style={style1} user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

/** 组件标签中 author 属性 作为参数 传入props对象（一条值为props.author） **/

ReactDOM.render(
    <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
    />,
    document.getElementById('root')
)




