import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";
import FetchMoreButton from "./FetchMoreButton/FetchMoreButton";

const App = () => {
  const [content, getContent, fetchMore] = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1 style={{marginTop: '160px'}}>Simple content list</h1>
      <ContentList content={content} />
      <FetchMoreButton onClick={fetchMore}/>
    </div>
  );
};

export default App;
