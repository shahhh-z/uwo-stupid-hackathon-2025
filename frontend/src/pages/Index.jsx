import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { MessageBubble } from "@/components/MessageBubble";
import { CodeInput } from "@/components/CodeInput";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (code) => {
    // Add user message
    const userMessage = { role: "user", content: code };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API call - replace with actual backend call later
    setTimeout(() => {
      const corruptedCode = `// CORRUPTED VERSION - DO NOT USE!\n// Added some spicy bugs for you 🔥\n\n${code}\n\n// TODO: fix the intentional bugs above\n// Good luck debugging this mess lol`;
      
      const assistantMessage = {
        role: "assistant",
        content: corruptedCode,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <ChatHeader />
      
      <main className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 p-8 max-w-2xl">
              <h2 className="text-3xl font-semibold">How can I help you today?</h2>
              <p className="text-muted-foreground">
                I can help improve your code, fix bugs, add features, and provide suggestions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                <div className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Optimize my code →</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Fix bugs →</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Add features →</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium">Improve performance →</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {messages.map((message, index) => (
              <MessageBubble key={index} role={message.role} content={message.content} />
            ))}
            {isLoading && (
              <div className="flex gap-4 p-6 bg-muted/30">
                <div className="max-w-3xl mx-auto w-full flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-sm font-semibold mb-2">
                      CodeAssist
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <CodeInput onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};

export default Index;
