import React, { useState } from 'react'
import '../styles/App.css'

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])



  const handleChange = (e) => {
    setText(e.target.value)
  }

  const enter = (e) => {
    if (e.key === 'Enter') {
      const id = Math.random() * 999
      const item = { id, text, checked: false }
      setList([...list, item])

    }
  }

  const deletedText = (id) => {
    console.log(id)
    const newArray = list.filter((el) => id !== el.id)
    setList(newArray)

  }

  const check = (id, checked) => {
    let newList = []
    if (checked === false) {
      newList = list.map((el) => {
        if (id == el.id) {
          el.checked = true
        }
        return el
      })
    } else {
      newList = list.map((el) => {
        if (id == el.id) {
          el.checked = false
        }
        return el
      })

    }
    setList(newList)
  }





  return (



    <div className='container'>
      <div className="App">
        <h1>React to do list</h1>
        <input
          className='description'
          type='text'
          onChange={handleChange}
          onKeyDown={enter}
        />
        <div className='list'>
          <ul>
            {list.map((item, index) => (
              <li key={item.id} className='task'>
                <div className='text'>
                {item.text}
                </div>
                <div className='emojis'>
                  <button onClick={() => { deletedText(item.id) }}>❌</button>
                  <button onClick={() => { check(item.id, item.checked) }}>{item.checked ? '👍' : '👎'}</button>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  )
}

export default App
