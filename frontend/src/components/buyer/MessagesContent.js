import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socket from '../../utils/socket';

const fishermen = [
  { id: 'john123', name: 'Fisherman John' },
  { id: 'emily456', name: 'Fisherman Emily' },
  // Replace with actual user data
];

const MessagesContent = ({ userId }) => {
  const [selectedFisherman, setSelectedFisherman] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    socket.emit('join', userId);

    socket.on('receiveMessage', (messageData) => {
      if (
        selectedFisherman &&
        (messageData.from === selectedFisherman.id || messageData.to === selectedFisherman.id)
      ) {
        setMessages((prev) => [...prev, messageData]);
      }
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [userId, selectedFisherman]);

  const fetchChatHistory = async (fishermanId) => {
    try {
      const res = await axios.get(`/api/messages/${userId}/${fishermanId}`);
      setMessages(res.data);
    } catch (err) {
      console.error('Failed to load chat history:', err);
    }
  };

  const handleFishermanSelect = (fisherman) => {
    setSelectedFisherman(fisherman);
    fetchChatHistory(fisherman.id);
  };

  const sendMessage = () => {
    if (newMsg.trim() && selectedFisherman) {
      const msg = {
        from: userId,
        to: selectedFisherman.id,
        message: newMsg,
      };
      socket.emit('sendMessage', msg);
      setMessages((prev) => [...prev, { ...msg, createdAt: new Date() }]);
      setNewMsg('');
    }
  };

  return (
    <div className="flex gap-4">
      {/* Sidebar: Fishermen List */}
      <div className="w-1/3 bg-white p-4 rounded shadow h-full">
        <h3 className="text-lg font-semibold mb-4">Fishermen</h3>
        <ul className="space-y-2">
          {fishermen.map((fisherman) => (
            <li
              key={fisherman.id}
              onClick={() => handleFishermanSelect(fisherman)}
              className={`cursor-pointer p-2 rounded ${selectedFisherman?.id === fisherman.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            >
              {fisherman.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 bg-white p-4 rounded shadow flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto mb-2">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.from === userId ? 'text-right' : 'text-left'}`}>
              <div className="inline-block bg-gray-100 px-3 py-2 rounded">
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(msg.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Type a message"
            className="flex-1 border rounded p-2"
          />
          <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
