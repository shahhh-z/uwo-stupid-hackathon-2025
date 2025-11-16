import { cn } from "@/lib/utils";
import { Code2, Bot } from "lucide-react";

export const MessageBubble = ({ role, content, type }) => {
  const isUser = role === "user";

  return (
    <div className={cn("flex gap-4 p-6 animate-in fade-in slide-in-from-bottom-3 duration-500", !isUser && "bg-muted/30")}>
      <div className="max-w-3xl mx-auto w-full flex gap-4">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
            isUser ? "bg-muted" : "bg-primary text-primary-foreground"
          )}
        >
          {isUser ? <Code2 className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>
        <div className="flex-1 space-y-2 pt-1">
          <div className="text-sm font-semibold">
            {isUser ? "You" : "CodeAssist"}
          </div>

          <p className="text-sm text-foreground whitespace-pre-wrap break-words">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
