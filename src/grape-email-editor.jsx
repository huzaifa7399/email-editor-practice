import React, { useEffect, useRef } from "react";
import grapesjsMJML from "grapesjs-mjml";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const GrapeEmailEditor = () => {
  const editorContainerRef = useRef(null);

  useEffect(() => {
    if (editorContainerRef.current !== null) {
      const editor = grapesjs.init({
        container: editorContainerRef.current,
        plugins: [grapesjsMJML],
        pluginsOpts: {
          [grapesjsMJML]: {},
        },
        storageManager: false,
      });

      // Set the initial content of the canvas
      const defaultContent = `
        <mjml>
          <mj-body>
          </mj-body>
        </mjml>`;
      editor.setComponents(defaultContent);

      return () => {
        editor.destroy();
      };
    }
  }, [editorContainerRef]);

  return (
    <>
      <div ref={editorContainerRef}></div>
    </>
  );
};

export default GrapeEmailEditor;
