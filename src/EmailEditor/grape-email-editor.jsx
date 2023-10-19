import React, { useEffect, useRef, useState } from "react";
import grapesjsMJML from "grapesjs-mjml";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { defaultEmailTemplate } from "../helpers";

const GrapeEmailEditor = () => {
  const editorContainerRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (editorContainerRef.current !== null) {
      const editorInstance = grapesjs.init({
        container: editorContainerRef.current,
        plugins: [grapesjsMJML],
        forceClass: true,
        pluginsOpts: {
          [grapesjsMJML]: {},
        },
        storageManager: false,
        // storageManager: {
        //   type: "local", // Type of the storage, available: 'local' | 'remote'
        //   autosave: true, // Store data automatically
        //   autoload: true, // Autoload stored data on init
        //   stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
        //   options: {
        //     local: {
        //       // Options for the `local` type
        //       key: "gjsProject", // The key for the local storage
        //     },
        //   },
        // },
      });
      editorInstance.Panels.addButton("options", [
        {
          id: "save-db",
          className: "fa fa-floppy-o",
          command: "save-db",
          attributes: { title: "Save Template" },
        },
        {
          id: "show-json",
          className: "btn-show-json",
          label: "JSON",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`
              )
              .open();
          },
        },
      ]);

      // Add the command
      editorInstance.Commands.add("save-db", {
        run: function (e, sender) {
          sender && sender.set("active", 0); // turn off the button
          e.store();

          var mjmldata = e.getHtml();
          var cssdata = e.getCss();
          console.log(mjmldata, cssdata);
          var htmldata = e.runCommand("gjs-get-inlined-html");
          console.log(editorInstance.current);
          console.log(e.getHtml("gjs-get-inlined-html"));

          //to do - post to db
        },
      });
      // Set the initial content of the canvas
      const defaultContent = defaultEmailTemplate;
      // const defaultContent = `
      //   <mjml>
      //     <mj-body>
      //     </mj-body>
      //   </mjml>`;
      editorInstance.setComponents(defaultContent);

      setEditor(editorInstance);

      return () => {
        editorInstance.destroy();
      };
    }
  }, [editorContainerRef]);

  const handleSave = () => {
    if (editor) {
      console.log(editor.getComponents());
    }
  };

  return (
    <>
      <div ref={editorContainerRef}></div>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default GrapeEmailEditor;
