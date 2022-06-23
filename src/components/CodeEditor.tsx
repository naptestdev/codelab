import Editor, { loader } from "@monaco-editor/react";
import { FC, useEffect, useRef, useState } from "react";

import { emmetHTML } from "emmet-monaco-es";

loader.config({
  paths: { vs: "/vs" },
});

const template = (values: { HTML: string; CSS: string; Javascript: string }) =>
  `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>${values.CSS}</style></head><body>${values.HTML}<script>${values.Javascript}</script></body></html>`;

interface CodeEditorProps {
  htmlCode: string;
  cssCode: string;
  javascriptCode: string;
}

const CodeEditor: FC<CodeEditorProps> = ({
  htmlCode,
  cssCode,
  javascriptCode,
}) => {
  const [values, setValues] = useState<{
    HTML: string;
    CSS: string;
    Javascript: string;
  }>(
    localStorage.getItem("codelab-values")
      ? JSON.parse(localStorage.getItem("codelab-values") as string)
      : {
          HTML: htmlCode || "",
          CSS: cssCode || "",
          Javascript: javascriptCode || "",
        }
  );

  const [currentLanguage, setCurrentLanguage] = useState<
    "HTML" | "CSS" | "Javascript"
  >("HTML");
  const [output, setOutput] = useState("");
  const [isPreviewOpened, setIsPreviewOpened] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    localStorage.setItem("codelab-values", JSON.stringify(values));

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setOutput(template(values));
    }, 1000);
  }, [values, values.HTML, values.CSS, values.Javascript]);

  return (
    <div className="h-[calc(100vh-76px)] flex flex-col items-stretch">
      <div className="flex item-center justify-between p-2 flex-shrink-0 bg-[#1E1D1F]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setCurrentLanguage("HTML");
              setIsPreviewOpened(false);
            }}
          >
            HTML
          </button>
          <button
            onClick={() => {
              setCurrentLanguage("CSS");
              setIsPreviewOpened(false);
            }}
          >
            CSS
          </button>
          <button
            onClick={() => {
              setCurrentLanguage("Javascript");
              setIsPreviewOpened(false);
            }}
          >
            Javascript
          </button>
          <button onClick={() => setIsPreviewOpened(true)}>Preview</button>
        </div>
        <div>
          <button
            onClick={() =>
              setValues({
                HTML: htmlCode || "",
                CSS: cssCode || "",
                Javascript: javascriptCode || "",
              })
            }
          >
            Restore default
          </button>
        </div>
      </div>
      <div className={`flex-grow ${isPreviewOpened ? "hidden" : ""}`}>
        <Editor
          options={{
            colorDecorators: currentLanguage === "CSS",
            tabSize: 2,
            cursorBlinking: "smooth",
          }}
          onMount={(editor, monaco) => {
            emmetHTML(monaco);
            setOutput(template(values));
          }}
          theme="vs-dark"
          width="100%"
          height="100%"
          language={currentLanguage.toLowerCase()}
          value={values[currentLanguage]}
          onChange={(value) =>
            setValues((prev: any) => ({ ...prev, [currentLanguage]: value }))
          }
          loading={
            <span className="text-white text-xl">Loading editor...</span>
          }
        />
      </div>
      <div className={`flex-grow bg-white ${isPreviewOpened ? "" : "hidden"}`}>
        <iframe
          className="w-full h-full"
          srcDoc={output}
          frameBorder={0}
          title="Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default CodeEditor;
