function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 ? (
                <h2>Have {unreadMessages.length} Messages Unread</h2>
            ):(
                <h2 className='red'>
                    Have No Message Unread
                </h2>
            )}
        </div>
    )
}
const messages = []
ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
)