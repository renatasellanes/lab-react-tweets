import ProfileImage from './ProfileImage'
import User from "./User"
import TimesTamp from "./TimesTamp"
import Message from "./Message"
import Actions from "./Actions"



function Tweet(props) {
  //console.log(props.tweet)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userDate={props.tweet.user}/>
          <TimesTamp time={props.tweet.timestamp} />

        </div>

        <Message message={props.tweet.message} /> 
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
