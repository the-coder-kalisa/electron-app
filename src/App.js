import axios from 'axios'
import {useState} from 'react'

const {ipcRenderer} = window.require('electron');

function App() {
  const [post, setPost] = useState([])
  axios.get('https://reddit.com/r/aww.json')
  .then((response)=>(setPost(response.data.data.children)))
  .catch(err => console.log(err));
   const show_image = (image) =>{
     ipcRenderer.send('hello', image);
   }
  return (
    <div >
      <ul className="list-none">
      {post.map((post, index)=>(
        <li onClick={()=> show_image(post.data.thumbnail)} className="border-b-2 hover:bg-gray-500 cursor-pointer flex gap-5 items-center border-solid py-5" key={post.data.id}>
          <img className='rounded-full w-[5rem] h-[5rem]' src={post.data.thumbnail} alt="hello"/>
          <div className='font-bold'>{post.data.title}</div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
