import Background from './component/Background'
import Carmain from './component/Carmain'
import CarTypes from './component/CarTypes'
import CarGalleries from './component/CarGalleries'

const HomePage = () => {
  return (
    <main className='min-h-screen'>
      <Background/>
          <Carmain/>
          <CarTypes/>
          <CarGalleries/>
    </main>
  )
}

export default HomePage