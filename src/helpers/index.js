//the default template that will appear to user on load

//to create custom template here we need to copy paste the object
export const template = {
  counters: {
    u_column: 1,
    u_row: 1,
    u_content_custom_dy_recommendation: 1,
    u_content_divider: 2,
    u_content_text: 1,
    u_content_button: 2,
    u_content_image: 3,
  },
  body: {
    rows: [
      {
        cells: [1],
        columns: [
          {
            contents: [
              {
                type: "text",
                values: {
                  containerPadding: "10px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_1",
                    htmlClassNames: "u_content_text",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 40px; line-height: 56px;"><strong><span style="line-height: 56px; font-size: 40px;">PLUGIT Email Editor!</span></strong></span></p>',
                },
              },
              {
                type: "divider",
                values: {
                  width: "100%",
                  border: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "#BBBBBB",
                  },
                  textAlign: "center",
                  containerPadding: "10px",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_divider_1",
                    htmlClassNames: "u_content_divider",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                },
              },
              {
                type: "button",
                values: {
                  containerPadding: "10px",
                  href: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank",
                    },
                  },
                  buttonColors: {
                    color: "#FFFFFF",
                    backgroundColor: "#3AAEE0",
                    hoverColor: "#FFFFFF",
                    hoverBackgroundColor: "#3AAEE0",
                  },
                  size: {
                    autoWidth: true,
                    width: "100%",
                  },
                  textAlign: "center",
                  lineHeight: "120%",
                  padding: "10px 20px",
                  border: {},
                  borderRadius: "4px",
                  _meta: {
                    htmlID: "u_content_button_2",
                    htmlClassNames: "u_content_button",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  text: '<span style="font-size: 14px; line-height: 16.8px;">PLUGIT&nbsp; Custom Button</span>',
                  calculatedWidth: 190,
                  calculatedHeight: 36,
                },
              },
              {
                type: "image",
                values: {
                  containerPadding: "10px",
                  src: {
                    url: "https://s3.amazonaws.com/unroll-images-production/projects%2F9788%2F1625642966584-1586862731153.png",
                    width: 200,
                    height: 200,
                  },
                  textAlign: "center",
                  altText: "Image",
                  action: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank",
                    },
                  },
                  _meta: {
                    htmlID: "u_content_image_3",
                    htmlClassNames: "u_content_image",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                },
              },
            ],
            values: {
              backgroundColor: "",
              padding: "0px",
              border: {},
              _meta: {
                htmlID: "u_column_1",
                htmlClassNames: "u_column",
              },
            },
          },
        ],
        values: {
          displayCondition: null,
          columns: false,
          backgroundColor: "",
          columnsBackgroundColor: "",
          backgroundImage: {
            url: "",
            fullWidth: true,
            repeat: false,
            center: true,
            cover: false,
          },
          padding: "0px",
          hideDesktop: false,
          _meta: {
            htmlID: "u_row_1",
            htmlClassNames: "u_row",
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
          hideMobile: false,
          noStackMobile: false,
        },
      },
    ],
    values: {
      textColor: "#000000",
      backgroundColor: "#e7e7e7",
      backgroundImage: {
        url: "",
        fullWidth: true,
        repeat: false,
        center: true,
        cover: false,
      },
      contentWidth: "500px",
      contentAlign: "center",
      fontFamily: {
        label: "Arial",
        value: "arial,helvetica,sans-serif",
      },
      preheaderText: "",
      linkStyle: {
        body: true,
        linkColor: "#0000ee",
        linkHoverColor: "#0000ee",
        linkUnderline: true,
        linkHoverUnderline: true,
      },
      _meta: {
        htmlID: "u_body",
        htmlClassNames: "u_body",
      },
    },
  },
  schemaVersion: 6,
};

export const defaultEmailTemplate = [
  {
    tagName: "mjml",
    type: "mjml",
    components: [
      {
        tagName: "mj-body",
        type: "mj-body",
        style: { width: "600px" },
        attributes: { width: "600px", style: "width:600px;" },
        components: [
          {
            tagName: "mj-section",
            type: "mj-section",
            style: {
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "10px",
              "padding-bottom": "10px",
              "text-align": "center",
            },
            attributes: {
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "10px",
              "padding-bottom": "10px",
              "text-align": "center",
              style:
                "padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;text-align:center;",
            },
            components: [
              {
                tagName: "mj-column",
                type: "mj-column",
                style: { "vertical-align": "top" },
                attributes: {
                  "vertical-align": "top",
                  style: "vertical-align:top;",
                },
                components: [
                  {
                    tagName: "mj-text",
                    type: "mj-text",
                    style: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                    },
                    attributes: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                      style:
                        "padding-top:10px;padding-bottom:10px;padding-right:25px;padding-left:25px;font-size:13px;line-height:22px;align:left;",
                    },
                    components: [{ type: "textnode", content: "Content 1" }],
                  },
                ],
              },
              {
                tagName: "mj-column",
                type: "mj-column",
                style: { "vertical-align": "top" },
                attributes: {
                  "vertical-align": "top",
                  style: "vertical-align:top;",
                },
                components: [
                  {
                    tagName: "mj-text",
                    type: "mj-text",
                    style: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                    },
                    attributes: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                      style:
                        "padding-top:10px;padding-bottom:10px;padding-right:25px;padding-left:25px;font-size:13px;line-height:22px;align:left;",
                    },
                    components: [{ type: "textnode", content: "Content 2" }],
                  },
                ],
              },
            ],
          },
          {
            tagName: "mj-section",
            type: "mj-section",
            style: {
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "10px",
              "padding-bottom": "10px",
              "text-align": "center",
            },
            attributes: {
              "padding-left": "0px",
              "padding-right": "0px",
              "padding-top": "10px",
              "padding-bottom": "10px",
              "text-align": "center",
              style:
                "padding-left:0px;padding-right:0px;padding-top:10px;padding-bottom:10px;text-align:center;",
            },
            components: [
              {
                tagName: "mj-column",
                type: "mj-column",
                style: { "vertical-align": "top" },
                attributes: {
                  "vertical-align": "top",
                  style: "vertical-align:top;",
                },
                components: [
                  {
                    tagName: "mj-text",
                    type: "mj-text",
                    style: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                    },
                    attributes: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                      style:
                        "padding-top:10px;padding-bottom:10px;padding-right:25px;padding-left:25px;font-size:13px;line-height:22px;align:left;",
                    },
                    components: [{ type: "textnode", content: "Content 1" }],
                  },
                ],
              },
              {
                tagName: "mj-column",
                type: "mj-column",
                style: { "vertical-align": "top" },
                attributes: {
                  "vertical-align": "top",
                  style: "vertical-align:top;",
                },
                components: [
                  {
                    tagName: "mj-text",
                    type: "mj-text",
                    style: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                    },
                    attributes: {
                      "padding-top": "10px",
                      "padding-bottom": "10px",
                      "padding-right": "25px",
                      "padding-left": "25px",
                      "font-size": "13px",
                      "line-height": "22px",
                      align: "left",
                      style:
                        "padding-top:10px;padding-bottom:10px;padding-right:25px;padding-left:25px;font-size:13px;line-height:22px;align:left;",
                    },
                    components: [{ type: "textnode", content: "Content 2" }],
                  },
                ],
              },
            ],
          },
          { type: "textnode", content: "\n          " },
        ],
      },
    ],
  },
];

export const defaultEmailTemplateHtml = `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding:0;
      }
      body {
        margin:0;
        padding:0;
        -webkit-text-size-adjust:100%;
        -ms-text-size-adjust:100%;
      }
      table, td {
        border-collapse:collapse;
        mso-table-lspace:0pt;
        mso-table-rspace:0pt;
      }
      img {
        border:0;
        height:auto;
        line-height:100%;
        outline:none;
        text-decoration:none;
        -ms-interpolation-mode:bicubic;
      }
      p {
        display:block;
        margin:13px 0;
      }
    </style>
    <!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
    <!--[if lte mso 11]>
<style type="text/css">
.mj-outlook-group-fix { width:100% !important; }
</style>
<![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-50 {
          width:50% !important;
          max-width: 50%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-50 {
        width:50% !important;
        max-width: 50%;
      }
    </style>
    <style type="text/css">
    </style>
    <style type="text/css">
    </style>
  </head>
  <body style="word-spacing:normal;">
    <div
         style=""
         >
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div  style="margin:0px auto;max-width:600px;">
        <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
               >
          <tbody>
            <tr>
              <td
                  style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
                  >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                <div
                     class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                     >
                  <table
                         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
                         >
                    <tbody>
                      <tr>
                        <td
                            align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                            >
                          <div
                               style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
                               >Content 1
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                <div
                     class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                     >
                  <table
                         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
                         >
                    <tbody>
                      <tr>
                        <td
                            align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                            >
                          <div
                               style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
                               >Content 2
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div  style="margin:0px auto;max-width:600px;">
        <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
               >
          <tbody>
            <tr>
              <td
                  style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
                  >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                <div
                     class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                     >
                  <table
                         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
                         >
                    <tbody>
                      <tr>
                        <td
                            align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                            >
                          <div
                               style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
                               >Content 1
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                <div
                     class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                     >
                  <table
                         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
                         >
                    <tbody>
                      <tr>
                        <td
                            align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                            >
                          <div
                               style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
                               >Content 2
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
</html>
`;
