import React, { useEffect, useRef, useState } from "react";
import grapesjsMJML from "grapesjs-mjml";
import GjsEditor from "@grapesjs/react";
import grapesjs from "grapesjs";
// import mjml2html from "mjml";
import "grapesjs/dist/css/grapes.min.css";
import {
  defaultEmailTemplate,
  defaultEmailTemplateHtml,
  template,
} from "../helpers";

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
        layerManager: {
          sortable: false,
          hidable: false,
        },
        assetManager: {
          // ...
          // Upload endpoint, set `false` to disable upload, default `false`
          upload:
            "https://dev-push.universal-apps.com/api/v1/campaign/upload-image",

          // The name used in POST to pass uploaded files, default: `'files'`
          uploadName: "image",
          // ...
        },
        storageManager: {
          id: "gjs-",
          type: "local",
          autosave: true,
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },
        // storageManager: false,
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
      editorInstance.setDevice("Tablet");
      console.log(editorInstance.getDevice());
      // Add the command
      editorInstance.Commands.add("save-db", {
        run: function (e, sender) {
          sender && sender.set("active", 0); // turn off the button
          e.store();

          console.log(JSON.stringify(e.getComponents()));
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
      function returnHtml() {
        const htmlWithCss = editorInstance.runCommand("gjs-get-inlined-html");
        console.log(editorInstance.Commands.run("gjs-get-inlined-html"));
        console.log(htmlWithCss);
      }
      // returnHtml();
      return () => {
        editorInstance.destroy();
      };
    }
  }, [editorContainerRef]);

  const onEditor = (editor) => {
    editor.Panels.addButton("options", [
      {
        id: "save-db",
        className: "fa fa-floppy-o",
        command: "save-db",
        attributes: { title: "Save Template" },
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: "{}",
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
    editor.Commands.add("save-db", {
      run: function (e, sender) {
        sender && sender.set("active", 0); // turn off the button
        e.store();

        console.log(e);
        console.log(JSON.stringify(e.getComponents()));
        //to do - post to db
      },
    });

    const defaultContent = defaultEmailTemplate;
    // const defaultContent = `
    //   <mjml>
    //     <mj-body>
    //     </mj-body>
    //   </mjml>`;
    editor.setComponents(defaultContent);
    console.log("Editor loaded", { editor });
  };

  return (
    <>
      <GjsEditor
        grapesjs="https://unpkg.com/grapesjs"
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={{
          height: "100vh",
          storageManager: {
            type: "local", // Use local storage
            autosave: true, // Enable autosave
            autoload: true, // Load the previously saved content on editor initialization
            stepsBeforeSave: 1, // Number of steps (changes) before triggering autosave
            storeComponents: true, // Store components data
            storeStyles: true, // Store styles data
            storeHtml: true, // Store HTML data
            storeCss: true, // Store CSS data
          },
        }}
        plugins={[
          {
            id: "gjs-blocks-basic",
            src: "https://unpkg.com/grapesjs-blocks-basic",
          },
          grapesjsMJML,
        ]}
        // onEditor={onEditor}
        onEditor={(editor) => {
          // Custom callback to handle the editor instance
          onEditor(editor);
          // console.log(editor.config);
          // Assuming onEditor is a function that handles the editor instance
          editor.Commands.add("get-html-inline-styles", {
            run: (editor, sender) => {
              // Get the HTML with inline styles
              const htmlWithInlineStyles = editor.getHtml({ inlineCss: true });

              // Handle the HTML as needed (e.g., save to a remote server)
              console.log(htmlWithInlineStyles);
              const { html } = mjml2html(htmlWithInlineStyles, {
                beautify: true,
              });
              console.log(html);
            },
          });

          // Trigger the custom command to get HTML with inline styles
          editor.runCommand("get-html-inline-styles");
        }}
      />
      {/* <div ref={editorContainerRef}></div> */}
    </>
  );
};

export default GrapeEmailEditor;
