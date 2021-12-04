import {useState, useEffect} from "react";

function App2() {
   //   const [counter,setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => { setValue((prev)=> prev+1)}
//   const onChange = (event)  => {
//     setKeyword(event.target.value);
//   }
//   useEffect( () =>{
//     console.log("i run all the time");
//   }, []);
//   useEffect( ()=>{
//       console.log("i run when 'keyword' changes");
//   } , [keyword]);  //keyword가 변할때만 실행
//   useEffect( ()=>{
//     console.log("i run when 'counter' changes");
//   } , [counter]);  
//   useEffect( ()=>{
//     console.log("i run when both changes");
// } , [counter,keyword]);  
//   return (
//     <div>
//       <input type="text" placeholder="Search Here..." onChange={onChange} value={keyword}/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click!</button>
//     </div>
//   );

  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev)=> !prev);
  }

  function Hello() {
    // useEffect( function(){
    //   console.log("hi :)");
    //   return function () {
    //     console.log("bye :(");
    //   }
    // }, []);
    useEffect(()=>{
      console.log("hi :)");
      return ()=>{
        console.log("bye :(");
      }
    },[]);
    return <h1>Hello</h1>
  }
  return <div>
      {showing ? <Hello/>: null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
}

export default App2;