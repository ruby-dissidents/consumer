import { Route, Routes } from 'react-router-dom';

import { FinishPage, MainPage, NamePage, TimeSlots } from './pages';
import { PageWrapper } from './components';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/time-slots' element={<TimeSlots />} />
        <Route path='/generate' element={<NamePage />} />
        <Route path='/finish' element={<FinishPage />} />
      </Route>
    </Routes>
  );
}

export default App;
