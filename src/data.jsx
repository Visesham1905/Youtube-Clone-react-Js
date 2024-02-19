export const API_KEY='AIzaSyAw8poj0YenwtP5wuZcVXIpPx1gaJ88vBQ';


export const value_converter=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else  if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}