import {Route, Routes} from 'react-router';

import HomePage from "../pages/HomePage"
import CreatePage from '../pages/CreatePage'
import NoteDetailPage from '../pages/NoteDetailPage'
import { toast } from 'react-hot-toast';


const App = () => {
  return <div data-theme="forest">
    <button className="btn btn-outline">Default</button>
    <button className="btn btn-outline btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
    <button className="btn btn-outline btn-accent">Accent</button>
    <button className="btn btn-outline btn-info">Info</button>
    <button className="btn btn-outline btn-success">Success</button>
    <button className="btn btn-outline btn-warning">Warning</button>
    <button className="btn btn-outline btn-error">Error</button>
      <Routes>
        <Route path="/create" element ={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>

};

export default App;
