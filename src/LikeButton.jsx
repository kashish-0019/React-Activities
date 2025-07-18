import {useState} from 'react'
export default function LikeButton(){
    const [liked , setLiked] = useState(false);
    const [count , setCount] = useState(0);
    function toggleLike(){
       if(!liked){
         setCount(count+1);
       }
       setLiked(!liked);
    }
    let styles={
    color:"red"
    }
    return(
        <>
        <div className="container text-center ">
            <button onClick={toggleLike}
            className=" btn btn-warning rounded-pill mt-3 px-4 py-2 col">
                { 
                    liked ? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>  
                }  
            </button>
            <p className='col mt-3'>You liked {count} times</p>
        </div>
        </>
    )
}