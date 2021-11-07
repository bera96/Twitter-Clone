import React,{useState,useEffect} from "react";
import { FiSettings } from "react-icons/fi";
import { trends } from "../../../Firebase/Firebase";


export function Trends() {
  const [trend,setTrend]=useState([])

  const getTrends=()=>{
    trends.onSnapshot((querySnapshot)=>{
      const items=[]
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setTrend(items)
    })
  }
  useEffect(()=>{
    getTrends()
    
  },[])
  
  return (
    <div className="trends">
      <div className="trends-header">
        
        <span className="trends-header-text">Trends for you</span>
        <FiSettings className="trends-options" />
     
      </div>
     
      {trend.map(trend=>
        <div className="trend">
          <div className="trend-left">
            <div className="trend-categories">{trend.categories}</div>
            <div className="trend-tag">{trend.tag}</div>
            <div className="trend-tweet-number">{trend.tweetNumbers}</div>
          </div>
          <div className="trend-right">
            <div className="trend-ellipsis-holder">
            <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>

        </div>)}
      
     
    </div>
  );
}
