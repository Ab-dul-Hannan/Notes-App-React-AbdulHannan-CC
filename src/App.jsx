import React, { useState } from 'react'
import Header from './components/header.jsx'

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const HandleFORM = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(title, description);
  }

  return (<>
    <Header />

    <form className='notesForm' onSubmit={HandleFORM}>
      <input type="text" className='title' placeholder='Add Note Title'
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className='description' placeholder='Add Note Description'
        value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='addNote'>Add Note</button>
    </form>
    <div className='notesBox'>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae repellendus nobis possimus nisi, provident a cupiditate labore quidem nihil hic ullam, totam reprehenderit, commodi sit! Debitis cum et assumenda.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sunt sit maxime aliquam et odit natus modi, tenetur rerum dicta corporis nisi labore voluptatem voluptates harum. Eaque explicabo illo reprehenderit?</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt, sequi maxime sed enim accusantium voluptate ea asperiores pariatur a aperiam corrupti magni aut! Illum soluta quisquam neque molestiae consequuntur!</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
      <div className="note">
        <h3 className='noteTitle'>Note Title</h3>
        <p className='noteDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repellat perspiciatis ea nesciunt earum. Pariatur voluptatibus illo tempore. Ab totam eum inventore aut ex suscipit ut hic eos aperiam tempore.</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
    </div>
  </>
  )
}

export default App