import './App.css';
import LikeImage from './components/Render/LikeImage';
import LikePost from './components/Render/LikePost';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import Wrapper from './components/Render/Wrapper';

function App() {
  <h3>Blog Post</h3>
  return (
    <>
      <div>
      <h3>Render</h3>
        <Wrapper render={(counter, handleIncrement) => {
          return <LikeImage LikeImageCounter={counter} handleImageCount={handleIncrement} />
        }} />

        <Wrapper render={(counter, handleIncrement) => {
          return <LikePost LikePostCounter={counter} handlePostCount={handleIncrement} />
        }} /> 
      </div>

      <div>
        <h3>HOC</h3>
        <LikeImageHOC />
        <LikePostHOC />
      </div>
    </>
  );
}

export default App;
