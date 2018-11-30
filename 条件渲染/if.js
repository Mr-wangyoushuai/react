
function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(props) {
    return <h1 className="red">Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
       return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}
// ReactDOM.render(
//     <Greeting isLoggedIn={true}/>,
//     document.getElementById('root')
// );

function LoginButton(props){
    console.log(props.onClick)
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
function  LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }
    render() {
        console.log(this.state.isLoggedIn)
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
)





















