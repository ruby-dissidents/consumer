import {Route, Routes} from "react-router-dom";

import {
  FinishPage,
  FinishPageMob,
  MainPage,
  MainPageMob,
  MarkingPage,
  NamePageMob,
  TimeSlots,
  TimeSlotsMob
} from "./pages";
import {PageWrapper, PageWrapperMob} from "./components";

import "./App.css";

function App() {
  const clientWidth = document.documentElement.clientWidth

  if (clientWidth > 768) {
    return (
      <Routes>
        <Route path="/" element={<PageWrapper/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/marking" element={<MarkingPage/>}/>
          <Route path="/finish-marking" element={<FinishPage/>}/>
          <Route path="/time-slots" element={<TimeSlots/>}/>
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<PageWrapperMob/>}>
        <Route path="/" element={<MainPageMob/>}/>
        <Route path="/time-slots" element={<TimeSlotsMob/>}/>
        <Route path="/generate" element={<NamePageMob/>}/>
        <Route path="/finish" element={<FinishPageMob/>}/>
      </Route>
    </Routes>
  );
}

export default App;
