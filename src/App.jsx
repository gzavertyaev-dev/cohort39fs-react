import "./App.css";

//Lessons
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";
import Lesson05 from "./lessons/Lesson_05/Lesson_05";

//Homeworks
import Homework02 from "./homeworks/Homework02/Homework02";
import Homework03 from "./homeworks/Homework03/Homework03";
import Homework04 from "./homeworks/Homework04/Homework04";

//Consultations
import Consultation01 from "./consultations/Consultation01/Consultation01";
import Consultation_02 from "./consultations/Consultation_02/Consultation_02";

function App() {
  return (
    <div className="App">
      {/* <Consultation01 /> */}
      <Consultation_02 />
      {/* <Homework02 /> */}
      {/* <Homework03 /> */}
      {/* <Lesson05 /> */}
      {/* <Lesson02 /> */}
      {/* <Lesson03 /> */}
      {/* <Lesson04 /> */}
    </div>
  );
}

export default App;
