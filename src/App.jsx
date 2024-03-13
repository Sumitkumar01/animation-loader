import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center w-full h-[100vh] bg-[#0e1538] p-9'>
      <div className='box w-[300px] h-[400px] relative flex items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-[20px] overflow-hidden' >
       

        <img src={viteLogo} className="z-50" alt="Vite logo" />
        

      </div>

    </div>
  )
}

export default App
