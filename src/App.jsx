import { useState,useEffect,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// const useToggle=(initialState=false)=>{
//   const [isOpen,setIsOpen]=useState(initialState)
//   const open=()=>{
//     setIsOpen(true);
//   }
//   const close=()=>{
//     setIsOpen(false);
//   }
//   const toggle=()=>{
//     setIsOpen(!isOpen)
//   }
//   return{
//     isOpen,
//     open,
//     close,
//     toggle,
//   }
// }

// const Count=()=>{
//   const [count,setCount]=useState(0)
//   useEffect(
//     ()=>{
//       document.title=`Count:${count}`
//     },[count]
//   )
//   return(
//     <div>
//       <h1>Counter:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

// const Modal=({isOpen,onClose})=>{
//   if(!isOpen) return null;
//   return(
//     <div>
//       <div>
//         <h2>Modal</h2>
//         <p>Test modal</p>
//         <button onClick={onClose}>close</button>
//       </div>
//     </div>
//   )
// }
// const ModalExample=()=>{
//   const {isOpen,open,close,toggle}=useToggle()
//   return(
//     <div>
// <button onClick={open}>Open</button>
// <button onClick={close}>Close</button>
// <button onClick={toggle}>Toggle</button>
// <Modal isOpen={isOpen} onClose={close}/>
//   </div>
//   )
// }
const CountReview=()=>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const total=good+bad+neutral
  let positive= Math.floor((good/total)*100)
  if (good === 0){
    positive =0
  }

  return(
    <>
    <div className='Buttons'>
    <button className='Good' onClick={()=>setGood(good+1)}>Good</button>
    <button className='Neutral' onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button className='Bad' onClick={()=>setBad(bad+1)}>Bad</button>
    </div>
    <br />
    <p>Statistics</p>
    <p className='StatG'>Good:{good}</p>
    <p className='StatN'>Neutral:{neutral}</p>
    <p className='StatB'>Bad:{bad}</p>
    <p className='StatT'>Total:{total}</p>
    <p className='StatsP'>Positive:{positive}%</p>
    </>
  )
}

const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev ==='dark' ? 'light' : "dark"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000' : ' #94c3fe';
    document.body.style.color = theme === 'dark' ? '#fff' : '#000';
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <>
    {/* <Count></Count> */}
    {/* <ModalExample></ModalExample> */}
    <p>Please leave feedback</p>
    <div>
     <CountReview></CountReview>
     <button className='toggle' onClick={toggleTheme}>Change theme</button>
    </div>
    </>
    </ThemeContext.Provider>
  )
}

export default App
