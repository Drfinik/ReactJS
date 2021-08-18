import './App.css';
import React from 'react';
import { MessageList } from './componentes/MessageList/MessageList';
import { MessageForm } from './componentes/MessageForm/MessageForm';
import { useAddMessage } from './hooks/useAddMessage/useAddMessage';
import { useBotMessage } from './hooks/useBotMessage/useBotMessage'

const App = () => {
  const userName = 'Фёдор'; 
  const botName = 'Антон';

  const [messageList, text, { setMessageList, setText, onSubmit } ]  = useAddMessage(userName);
  useBotMessage(messageList, setMessageList, botName, userName);

  return (
    <div className="App">
      <MessageForm onSubmit={onSubmit} text={text} setText={setText}/>
      <MessageList messageList={messageList}/>
    </div>
  );
}

export default App;