/* import { useSelector } from 'react-redux'
import '../../App.css'
// import { useEffect } from 'react'   
// import { fetchTodos } from '../../store/todos/todos.action'
import { RootState } from '../../store/store'
import styles from './cake.module.css'
import { cakeById } from '../../services/cakes.service'
import { useState } from 'react'
import ICake from '../../types/cake.types'
import { RouteComponentProps } from 'react-router-dom';
import { useParams } from 'react-router-dom';


interface CakeProps extends RouteComponentProps {
  // Дополнительные свойства вашего компонента, если есть
}


function Cake() {

  const { cakeId } = useParams();
  

  const { user } = useSelector((state: RootState) => state.auth);

  const [cake, setCake] = useState<ICake>();


  const getCakeById = async () => {
    try {
      console.log('id', user?.id);
      const response = await cakeById.getCakeById(cakeId);
      console.log('response', response);
      setCake(response)

    } catch (error) {
      console.error(error);
    }
  }
  console.log('cake', cake);

  getCakeById();

  return (
    <>
      
        <h2>Cake</h2>   
          <div key={cake.id}>
            <p>{cake.name}</p>
            <p>{cake.price}</p> 
            <p>{cake.category}</p>
            <p>{cake.ingredients}</p>
            <img width='100px' src={`${cake.imagePath}?raw=true`} alt="pic" />
          </div>

      <button type="button" className="btn btn-warning" onClick={setOrder}>Order</button>


    </>
  )
}

export default Cake
*/
import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../App.css'
// import { useEffect } from 'react'   
// import { fetchTodos } from '../../store/todos/todos.action'
import { RootState } from '../../store/store'
import styles from './cake.module.css'
import { cakeById } from '../../services/cakes.service'
import { useState } from 'react'
import ICake from '../../types/cake.types'
import { RouteComponentProps } from 'react-router-dom';


function Cake() {
  const { cakeId } = useParams(); // Используем useParams для получения параметра из маршрута
  const { user } = useSelector((state: RootState) => state.auth);
//  const { user } = useSelector((state: RootState) => state.auth);

  const [cake, setCake] = useState<ICake | undefined>(undefined); // Укажем начальное значение undefined для cake

  useEffect(() => {
    // Здесь вы можете выполнить логику загрузки данных о торте с использованием cakeId и user
    // Например, отправить запрос на сервер или использовать локальные данные

    // После получения данных установите их с помощью setCake
    // setCake(ваш_торт);

    // Пример асинхронного запроса с использованием fetch
    fetch(`/api/cakes/${cakeId}`)
      .then((response) => response.json())
      .then((data) => setCake(data))
      .catch((error) => console.error(error));

  }, [cakeId, user]);

  return (
    <div>
      {cake ? (
        <>
          <h2>Cake</h2>   
          <div key={cake.id}>
            <p>{cake.name}</p>
            <p>{cake.price}</p> 
            <p>{cake.category}</p>
            <p>{cake.ingredients}</p>
            <img width='100px' src={`${cake.imagePath}?raw=true`} alt="pic" />
          </div>

          
        </>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default Cake;