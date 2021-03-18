import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
    height="100vh"
    projectID="9e9a7818-5579-4d2b-ad37-e6e6573ba72f"
    userName="sammy"
    userSecret="123123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }

    />
  );
}

export default App;
