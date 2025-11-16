import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Send } from "lucide-react";
import { useRef, useState } from "react";

export const CodeInput = ({ onSubmit, isLoading }) => {
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    if (code.trim() || file) {
      // always request degradation
      onSubmit({ message: code, file, degrade: true });
      setCode("");
      setFile(null);
      // reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleFileUpload = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = ev.target?.result;
        // keep the file content in textarea for user preview/editing
        setCode(String(content || ""));
      };
      reader.readAsText(f);
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
            {file && <span className="ml-3 text-sm text-muted-foreground">{file.name}</span>}
            {/* degrade toggle removed — degradation is always applied */}
          </div>
          <Button
            onClick={handleSubmit}
            disabled={(!code.trim() && !file) || isLoading}
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
