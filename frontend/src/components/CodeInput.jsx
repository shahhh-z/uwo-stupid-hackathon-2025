import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Send } from "lucide-react";
import { useRef, useState } from "react";

export const CodeInput = ({ onSubmit, isLoading }) => {
  const [code, setCode] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    if (code.trim()) {
      onSubmit(code);
      setCode("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        setCode(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="border-t border-border bg-card p-4">
      <div className="max-w-4xl mx-auto space-y-3">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here, or upload a file..."
          className="min-h-[120px] font-mono text-sm bg-code-bg resize-none"
          disabled={isLoading}
        />
        <div className="flex items-center justify-between">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c,.go,.rs,.rb,.php,.html,.css,.json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={!code.trim() || isLoading}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-4 h-4 mr-2" />
            Improve Code
          </Button>
        </div>
      </div>
    </div>
  );
};
