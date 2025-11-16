import { Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-10 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">CodeAssist AI</h1>
        </div>
      </div>
    </header>
  );
};
