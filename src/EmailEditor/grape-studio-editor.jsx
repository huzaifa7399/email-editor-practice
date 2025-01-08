import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";
import { dialogComponent } from "@grapesjs/studio-sdk-plugins";

const GrapeStudioEditor = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
      <StudioEditor
        style={{ flexGrow: 1 }}
        options={{
          gjsOptions: { storageManager: false },
          licenseKey: "YOUR_LICENSE_KEY",
          // ...
          plugins: [
            dialogComponent.init({
              category: "Content",
              label: "Popup",
            }),
          ],
          project: {
            type: "web",
            default: {
              pages: [
                {
                  name: "Dynamic Services",
                  component: `
                      <style>
      .container {
        padding: 40px;
      }

      @media (min-width: 768px) {
        .container {
          padding: 40px 80px;
        }
      }

      @media (min-width: 1024px) {
        .container {
          padding: 40px 100px;
        }
      }

      @media (min-width: 1536px) {
        .container {
          padding: 40px 180px;
        }
      }

      /* Responsive flex for sections */
      .section {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 14px;
        padding: 32px 8px;
      }

      @media (min-width: 768px) {
        .section {
          flex-direction: row;
          align-items: center;
        }
      }

      /* Heading styles */
      .heading {
        font-size: 38px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .sub-heading {
        font-size: 28px;
        font-weight: 600;
        height: 50px;
      }

      .second-description {
        font-size: 20px;
        font-weight: normal;
        height: 50px;
      }

      @media (min-width: 768px) {
        .heading {
          font-size: 52px;
        }
        .sub-heading {
          font-size: 40px;
        }
        .second-description {
          font-size: 30px;
        }
      }

      /* Paragraph styles */
      .paragraph {
        font-size: 18px;
        color: #7f7f7f;
        font-weight: 400;
        line-height: 30px;
      }

      @media (min-width: 768px) {
        .paragraph {
          font-size: 20px;
          line-height: 32px;
        }
      }
    </style>
    <div>
      <!-- Section 1 -->
      <div class="section">
        <div style="flex: 1">
          <h2 class="heading">Current Accounts</h2>
          <p class="paragraph">
            Different financial needs are proper to each business. Our current
            accounts take a more personalized approach to ensure you can focus
            on your core business and let us help you take care of the finances.
            They’re accessible, flexible and hassle-free. Thus, the day-to-day
            tasks will be done.
          </p>
        </div>
        <div style="flex: 1; display: flex; justify-content: center">
          <img
            src=""
            alt="feature-image"
            style="
              width: 100%;
              height: auto;
              max-height: 530px;
              max-width: 567px;
            "
          />
        </div>
      </div>

      <!-- Section 2 -->
      <div style="text-align: center; padding: 25px">
        <h2 class="sub-heading">Designed to perform</h2>
        <h3 class="second-description">
          Financial Business Benefits from below-listed account features
        </h3>
      </div>

      <!-- Section 3 -->
      <div class="section">
        <div style="flex: 1; display: flex; justify-content: center">
          <img
            src=""
            alt="feature-image"
            style="
              width: 100%;
              height: auto;
              max-height: 530px;
              max-width: 567px;
            "
          />
        </div>
        <div class="content" style="flex: 1">
          <ul style="display: grid; gap: 10px; padding: 0px">
            <li style="display: flex; align-items: start; gap: 10px">
              <img
                src=""
                alt="bullet-icon"
                style="width: 20px; height: 20px; margin-top: 8px"
              />
              <span class="paragraph">Add your bullet points here.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
                  `,
                },
              ],
            },
          },
          i18n: {
            locales: {
              en: {
                actions: {
                  importCode: {
                    content: "Paste here your MJML code and click Import",
                  },
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default GrapeStudioEditor;
