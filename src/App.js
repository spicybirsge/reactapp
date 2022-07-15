import { useState } from 'react';
import Markdown from 'marked-react';
import './App.css';



function App() {

  const [markdown, setMarkdown] = useState('');


  return (
 <div className='container'>
<p className='h2 text-light'>Markdown Renderer</p>
<div className='form-floating' style={{marginTop: "5%"}}>
  <textarea value={markdown} onChange={(e) => {setMarkdown(e.target.value)}} className="form-control bg-dark" style={{height: "450px", color: "white"}}></textarea>

</div>
<div id="html">
<Markdown value={markdown} />
</div>
<br />
<br />
<br />
 </div>
  );
}

export default App;
