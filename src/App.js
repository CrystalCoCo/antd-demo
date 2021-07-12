import './App.less';
import { Button, Pagination }from 'antd'

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Pagination defaultCurrent={3} total={500} />
    </div>
  );
}

export default App;
