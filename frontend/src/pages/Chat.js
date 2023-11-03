const Chat = (props) => {
  return ( 
    <>
      <h2>Web Chat</h2>
      <div>
        <input
          placeholder="Recipient" />
      </div>

      <div>
        <textarea
          placeholder="Type a message" />
      </div>

      <button>Send</button>
      <button>Clear</button>
      <button type="submit" onClick={props.logout}>Logout</button>
    </>
  );
}
 
export default Chat;