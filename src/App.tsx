import { SignIn } from './pages/SignIn'
import './styles/global.css';

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <SignIn />
    </div>
  )
}
