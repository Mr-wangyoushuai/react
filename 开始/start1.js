/*ReactDOM.render(
    <h1>hello, world</h1>,
    document.getElementById('root')
);*/

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const style1 = {
    background: 'red',
    color: 'green',
    fontSize: '20px'
};
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

var tick = function() {
    return (
        <div>
            <h1>hello, world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}
const element = (
    <h1>
        Hello, {formatName(user)}
        <div style={style1}>
            good ,{ getGreeting(user)}
        </div>
        {tick() }
    </h1>

)

ReactDOM.render(
    element,
    document.getElementById('root')
)
