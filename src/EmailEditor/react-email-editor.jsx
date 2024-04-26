import React, { useEffect, useRef } from "react";
import EmailEditor from "react-email-editor";
import { template } from "../helpers";
// import { template } from "./helpers";

const EmailEditorPreview = ({ emailEditorRef }) => {
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

  useEffect(() => {
    // exportHtml();
    console.log("lkshdaklfhsdfh");
  }, []);
  return (
    <>
      <div>
        <div></div>
        <hr />
        <EmailEditor
          projectId={186868}
          ref={emailEditorRef}
          style={{
            height: "98vh",
          }}
          options={{
            displayMode: "email",
            mergeTags: {},
            features: {
              stockImages: true,
            },
            id: "dy-email-editor",
          }}
          onLoad={onLoad}
        />
      </div>
      <button onClick={exportHtml}>Export HTML</button>
    </>
  );
};

export default EmailEditorPreview;
