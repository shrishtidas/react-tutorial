import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //use ref hook
  const passwordRef = useRef(null)

  const pswdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed,setPassword])

  const copyPswdToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)}, [password])

  useEffect(() => {
    pswdGenerator()
  }, [length, numAllowed, charAllowed, pswdGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>
      <h2 className='text-white text-center'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white
          text-gray"
          placeholder="Password"
          readOnly
          ref={passwordRef} 
        />
        <button 
        onClick={copyPswdToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed} 
            id="numbersInput"
            onChange={() => {
              setnumAllowed(prev => !prev);
            }} />
            <label htmlFor="numbersInput">Numbers</label>
          </div>

           <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charactersInput"
            onChange={() => {
              setcharAllowed(prev => !prev);
            }} />
            <label htmlFor="charactersInput">Special Characters</label>
           </div>
        </div>
    </div>
    </>
  )
}

export default App
