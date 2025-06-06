import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import JsFrameworks from './pages/projects/JsFrameworks';
import SemesterProject2 from './pages/projects/SemesterProject2';
import ExamProject2 from './pages/projects/ExamProject2';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/js-frameworks" element={<JsFrameworks />} />
          <Route path="/projects/semester-project-2" element={<SemesterProject2 />} />
          <Route path="/projects/exam-project-2" element={<ExamProject2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
