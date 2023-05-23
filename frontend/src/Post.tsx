import Nonprofit from "./interfaces/Nonprofit";
import './Post.css';

function Post({name, profileUrl, servings, lat_long, days_open}: Nonprofit) {
              return (<div className="post">
                 <p>Name: {name}</p> 
                 {profileUrl? 
                <a href={profileUrl||''}>{profileUrl||''}</a>:null
                }
                 <p>Servings: {servings||''}</p>
                 <p>Location: {lat_long||''}</p>
                 <div className="days">
                  <p>Days Open: 
                  {
                     days_open?
                  Object.keys(days_open as object).filter(day => days_open?.[day]).map(day => (
                     <span className="day-week" key={day}> {day} </span>
                  )):null
                  }
                  </p>
                 </div>
              </div>)
}

export default Post;