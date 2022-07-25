import logo from './logo.svg';
import './App.css';
import Cabecera from "./component/Cabecera";
import TodoList from "./component/TodoList";
function App() {
  return (

    <div>
      <Cabecera titulo ="BuckeList " subtitulo="lo mejor de todas las react"/>
      <main className="container w-50">
          <TodoList />
      </main>
    
    </div>
    )
 
}

export default App;
