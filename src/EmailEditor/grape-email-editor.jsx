import React, { useEffect, useRef, useState } from "react";
import grapesjsMJML from "grapesjs-mjml";
import GjsEditor from "@grapesjs/react";
import mjml2html from "mjml-browser";
import grapesjs from "grapesjs";
import {
  defaultEmailTemplate,
  defaultEmailTemplateHtml,
  template,
} from "../helpers";

const GrapeEmailEditor = () => {
  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
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
        onEditor={(editor) => {
          console.log("lkdshjafkl");
          editor.on("rteToolbarPosUpdate", (pos) => {
            console.log(pos);
            pos.left;
            // eg. update `pos.top` and `pos.left` based on additional data passed inside `pos`
          });
          editor.setComponents(defaultEmailTemplate); // it will not load if there is another template in local-storage
          editor.Panels.removeButton("views", "open-layers");
          editor.Panels.removeButton("options", "export-template"); // export html / mjml button hidden

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

          editor.Commands.add("save-db", {
            run: function (editor) {
              const htmlWithInlineStyles = editor.getHtml({ inlineCss: true });

              // Handle the HTML as needed (e.g., save to a remote server)
              console.log(htmlWithInlineStyles);
              const { html } = mjml2html(htmlWithInlineStyles, {
                beautify: true,
              });
              console.log(html);
            },
          });
        }}
      />
    </>
  );
};

export default GrapeEmailEditor;
