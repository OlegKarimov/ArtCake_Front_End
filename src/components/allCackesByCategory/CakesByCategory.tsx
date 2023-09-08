import { useSelector } from 'react-redux'
import '../../App.css'
// import { useEffect } from 'react'   
// import { fetchTodos } from '../../store/todos/todos.action'
import { RootState } from '../../store/store'
import styles from './cakesByCategory.module.css'
import { cakesByCategory } from '../../services/data.service'
import { useState } from 'react'
import ICake from '../../types/cake.types'

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

  return (
    
    <>
      <section className={styles.wrapper}>
        {!allCakes ? <p>No cakes</p> : allCakes.map((el) => 
          <div key={el.id}>
            <p>{el.name}      <strong>{el.price}$</strong></p>
            <img width='100px' src={`${el.imagePath}?raw=true`} alt="pic" />
          </div>
        )}
      </section>
    </>
  )
}

export default CakesByCategory
