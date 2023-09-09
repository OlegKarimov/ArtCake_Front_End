import { useSelector } from 'react-redux'
import '../../App.css'
// import { useEffect } from 'react'   
// import { fetchTodos } from '../../store/todos/todos.action'
import { RootState } from '../../store/store'
import styles from './cakesByCategory.module.css'
import { cakesByCategory } from '../../services/cakes.service'
import { useState } from 'react'
import ICake from '../../types/cake.types'
import { Link } from 'react-router-dom'

function CakesByCategory(Category: string) {
  const { user } = useSelector((state: RootState) => state.auth)

  const [allCakes, setAllCakes] = useState<ICake[]>([]);


  const getAllCakes = async () => {
    try {
      console.log('id', user?.id);
      const response = await cakesByCategory.getAllCakesByCategory(Category);
      console.log('response', response);
      setAllCakes(response.cakes)


    } catch (error) {
      console.error(error);
    }
  }
  getAllCakes();
//     <button type="button" className="btn btn-warning" onClick={getAllCakes}>Get all cakes</button>
  console.log('allCakes', allCakes);

// <Link className={el.name} to={`/cake/${el.id}`}>{el.name} {el.price}$ </Link>



  return (
    
    <>
      <section className={styles.wrapper}>
        {!allCakes ? <p>No cakes</p> : allCakes.map((el) => 
          <div key={el.id}>
            <Link className={el.name} to={`/cake/${el.id}`}>{el.name} {el.price}$ </Link>
            <img width='100px' src={`${el.imagePath}?raw=true`} alt="pic" />
            <p></p>
            <p></p>
          </div>
        )}
      </section>
    </>
  )
}

export default CakesByCategory
