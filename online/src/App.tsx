// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

// Sahifalar
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Profile from "./pages/Profile";

// Componentlar
import Header from "./components/Header";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="min-h-screen bg-gray-50">
        <Header />
        <Content className="max-w-[1280px] mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Content>
        <Footer className="text-center text-gray-500 py-4 bg-gray-100">
          BekjonUz ©{new Date().getFullYear()} – Sustainable Education Project
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;