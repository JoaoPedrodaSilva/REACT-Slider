import React, {useState, useEffect} from "react"
import Header from './Header.js'
import Review from './Review.js'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import data from './data.js'


function App() {
  const [dataIndex, setDataIndex] = useState(1)

  useEffect(() => {
    if(dataIndex < 0) {
      setDataIndex(data.length - 1)
    }
    if(dataIndex > data.length - 1) {
      setDataIndex(0)
    }
  }, [dataIndex, data])

  useEffect(() => {
    const timer = setInterval(() => {
      setDataIndex(dataIndex + 1)
    }, 3000)
    return () => clearInterval(timer)
  }, [dataIndex])

  return (
    <main className="App">
      <section>
        <Header />
      </section>

      <section>
        <FaChevronLeft 
          onClick={() => setDataIndex(dataIndex - 1)}
          className="left-arrow"
        /> 

        <section className="reviews">
          {data.map((review, reviewIndex) => {
            let position = {position: 'nextSlide'}
            if(reviewIndex === dataIndex) {
              position = {position: 'currentSlide'}
            }
            if(
                reviewIndex === dataIndex - 1 ||
                dataIndex === 0 && reviewIndex === data.length - 1
              ) {
              position = {position: 'previousSlide'}
            } 
            return <Review key={review.id} {...review} position={position} />
          })}
        </section>

        <FaChevronRight 
          onClick={() => setDataIndex(dataIndex + 1)}
          className="right-arrow"
        />
      </section>
      

      
    </main>

    
  )
}

export default App
