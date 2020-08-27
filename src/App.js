import React , {lazy, Suspense}from 'react';

//import Test_home1 from './components/test_home';//无懒加载组件test_home
//import Test_news1 from './components/test_news';//无懒加载组件test_news

const Test_home2 = lazy(() => import('./components/test_home'));//懒加载组件test_home
const Test_news2 = lazy(() => import('./components/test_news'));//懒加载组件test_news
function App() {
  return (
    <div className="App">
      {/******************1.懒加载*******************/}
      <Suspense fallback={<div>Loading...</div>}>
        <Test_home2/>
        <Test_news2/>
			</Suspense>
      
      {/******************2.不懒加载*******************/}
      {/* <Test_home1/>
      <Test_news1/> */}
    </div>
  );
}

export default App;
