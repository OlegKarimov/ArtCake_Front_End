import '../../App.css'
import { useAppSelector } from '../../hooks/hooks'
import CakesByCategory from '../allCackesByCategory/CakesByCategory'




function MainPage() {
  const { user } = useAppSelector(state => state.auth)
  console.log(user)
  

  return (
    <>
      {!user ? (<h2>Try to login</h2>) : (
      <>
      <h3>Cakes by category</h3>
      <div>
      <p>___________________________________________________________________________________</p>
        <p>CHEESECAKES: {CakesByCategory('CHEESECAKES')}</p>
      </div>
      <div>
        <p>___________________________________________________________________________________</p>
        <p>CUPCAKES: {CakesByCategory('CUPCAKES')}</p>  
      </div>
      <div>
        <p>___________________________________________________________________________________</p>
        <p>MACARONS: {CakesByCategory('MACARONS')}</p>
      </div>
      <div>
        <p>___________________________________________________________________________________</p>
        <p>MOUSSE: {CakesByCategory('MOUSSE')}</p>
        <p>___________________________________________________________________________________</p>
      </div>
      
      </>
      // </><h2>Good to see you again!</h2><p>Your email: {user?.email}</p>
     // </>)}
      
)}
    </>
  )
}

export default MainPage
