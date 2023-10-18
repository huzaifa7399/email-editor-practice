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
