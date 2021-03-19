import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
    height="100vh"
    projectID="9e9a7818-5579-4d2b-ad37-e6e6573ba72f"
    userName= {localStorage.getItem('username')}
    userSecret= {localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }

    />
  );
}

export default App;
