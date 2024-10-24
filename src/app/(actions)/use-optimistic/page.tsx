"use client";

import React, { useState, useRef, startTransition, useOptimistic } from "react";
import { deliverMessage } from "@/server/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Trash2 } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sending: boolean;
};

type ThreadProps = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
  removeMessage: (id: string) => void;
};

function Thread({ messages, sendMessage, removeMessage }: ThreadProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  async function formAction(formData: FormData) {
    const messageText = formData.get("message") as string;
    if (messageText.trim()) {
      startTransition(() => {
        addOptimisticMessage(messageText);
      });
      formRef.current?.reset();
      await sendMessage(formData);
      scrollAreaRef.current?.scrollTo(0, scrollAreaRef.current.scrollHeight);
    }
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string) => [
      ...state,
      {
        id: `optimistic-${Date.now()}`,
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <ScrollArea ref={scrollAreaRef} className="flex-grow p-6">
        {optimisticMessages.map((message) => (
          <div key={message.id} className="mb-4">
            <div
              className={`p-4 rounded-lg flex items-start justify-between ${
                message.sending ? "bg-gray-500" : "bg-gray-500"
              }`}
            >
              <div className="flex-grow mr-4">
                <p className="text-sm md:text-base">{message.text}</p>
                {message.sending && (
                  <p className="text-xs mt-1 text-gray-400">Sending...</p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeMessage(message.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove message</span>
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            formAction(formData);
          }}
          ref={formRef}
          className="flex gap-2"
        >
          <Input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          />
          <Button
            type="submit"
            size="icon"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello there!", sending: false },
  ]);

  async function sendMessage(formData: FormData) {
    const messageText = formData.get("message") as string;
    const sentMessage = await deliverMessage(messageText);

    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((msg) =>
        msg.sending && msg.text === messageText
          ? { id: Date.now().toString(), text: sentMessage, sending: false }
          : msg
      );

      if (
        !updatedMessages.some((msg) => msg.text === sentMessage && !msg.sending)
      ) {
        updatedMessages.push({
          id: Date.now().toString(),
          text: sentMessage,
          sending: false,
        });
      }

      return updatedMessages;
    });
  }

  function removeMessage(id: string) {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  }

  return (
    <div className="flex flex-col gap-10">
      <Thread
        messages={messages}
        sendMessage={sendMessage}
        removeMessage={removeMessage}
      />
    </div>
  );
}
