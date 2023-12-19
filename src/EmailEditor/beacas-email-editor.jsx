import React, { useCallback, useMemo } from "react";
import { BeacasEditorProvider } from "beacas-editor";
import { BeacasCore, BlockManager, ElementType } from "beacas-core";
import { Retro } from "beacas-plugins";
import "beacas-plugins/lib/style.css";

// Theme style, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/6979/setting/base/Color
import "@arco-themes/react-beacas-theme-retro/css/arco.css";

// fill clientId to authenticate. If you haven't registered yet,
// visit https://admin.beacas.com/ to get the clientId
BeacasCore.auth({
  clientId: "clqccn7je001508jqrt4pk0re",
});

export default function MyEditor() {
  // You can fetch data from the server.
  const initialValues = useMemo(() => {
    return {
      subject: "Welcome to Beacas mail",
      content: BlockManager.getBlockByType(ElementType.PAGE).create(),
    };
  }, []);

  // example
  const onUpload = (file) => {
    return Promise.resolve(
      "https://res.cloudinary.com/dfite2e16/image/upload/v1681907056/clgnivsuj0018z9ltiixmxf6k/ilh6rri61f512i7wb6yd.png"
    );
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  //   const config = Retro.useCreateConfig({
  //     onUpload,
  //     initialValues: initialValues,
  //     onSubmit: onSubmit,
  //   });

  return (
    <BeacasEditorProvider
      onUpload={onUpload}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Retro.Layout height={"calc(100vh - 40px)"}></Retro.Layout>
    </BeacasEditorProvider>
  );
}
