import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import { template } from "./helpers";

const EmailEditorPreview = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      //console design as html + object
      const { design, html } = data;
      console.log("exportHtml", html);
      console.log("design", design);
    });
  };

  const onLoad = () => {
    // emailEditorRef.current.loadDesign(template);
    if (emailEditorRef.current && emailEditorRef.current.editor)
      emailEditorRef.current.editor.loadDesign(template);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={exportHtml}>Export HTML</button>
        </div>
        <hr />
        <EmailEditor
          projectId={186868}
          ref={emailEditorRef}
          style={{
            height: "98vh",
          }}
          options={{
            displayMode: "email",
            features: {
              stockImages: true,
            },
            id: "dy-email-editor",
          }}
          onLoad={onLoad}
        />
      </div>
    </>
  );
};

export default EmailEditorPreview;
