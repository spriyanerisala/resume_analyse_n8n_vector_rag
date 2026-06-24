import React from 'react'
import ResumeUpload from './ResumeUpload';
import ChatBot from './ChatBot';
const App = () => {
  return (
    <div>
      <ResumeUpload/>
      <div className="my-10">
        <ChatBot />
      </div>
    </div>
  )
}

export default App