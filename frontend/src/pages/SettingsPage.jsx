// import { THEMES } from "../constants";
// import { useThemeStore } from "../store/useThemeStore";
// import { Send } from "lucide-react";

// const PREVIEW_MESSAGES = [
//   { id: 1, content: "Hey! How's it going?", isSent: false },
//   { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
// ];

// const SettingsPage = () => {
//   const { theme, setTheme } = useThemeStore();

//   return (
//     <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
//       <div className="space-y-6">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-lg font-semibold">Theme</h2>
//           <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
//         </div>

//         <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
//           {THEMES.map((t) => (
//             <button
//               key={t}
//               className={`
//                 group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
//                 ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
//               `}
//               onClick={() => setTheme(t)}
//             >
//               <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
//                 <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
//                   <div className="rounded bg-primary"></div>
//                   <div className="rounded bg-secondary"></div>
//                   <div className="rounded bg-accent"></div>
//                   <div className="rounded bg-neutral"></div>
//                 </div>
//               </div>
//               <span className="text-[11px] font-medium truncate w-full text-center">
//                 {t.charAt(0).toUpperCase() + t.slice(1)}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Preview Section */}
//         <h3 className="text-lg font-semibold mb-3">Preview</h3>
//         <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
//           <div className="p-4 bg-base-200">
//             <div className="max-w-lg mx-auto">
//               {/* Mock Chat UI */}
//               <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
//                 {/* Chat Header */}
//                 <div className="px-4 py-3 border-b border-base-300 bg-base-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
//                       J
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-sm">John Doe</h3>
//                       <p className="text-xs text-base-content/70">Online</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
//                   {PREVIEW_MESSAGES.map((message) => (
//                     <div
//                       key={message.id}
//                       className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
//                     >
//                       <div
//                         className={`
//                           max-w-[80%] rounded-xl p-3 shadow-sm
//                           ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
//                         `}
//                       >
//                         <p className="text-sm">{message.content}</p>
//                         <p
//                           className={`
//                             text-[10px] mt-1.5
//                             ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
//                           `}
//                         >
//                           12:00 PM
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Chat Input */}
//                 <div className="p-4 border-t border-base-300 bg-base-100">
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       className="input input-bordered flex-1 text-sm h-10"
//                       placeholder="Type a message..."
//                       value="This is a preview"
//                       readOnly
//                     />
//                     <button className="btn btn-primary h-10 min-h-0">
//                       <Send size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SettingsPage;
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Bell, Shield, HardDrive } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* ================= LEFT PANEL – PREFERENCES ================= */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Preferences</h2>

          {/* Notifications */}
          <div className="bg-base-100 border border-base-300 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell size={18} />
                <h3 className="font-medium">Notifications</h3>
              </div>
              <span className="badge badge-outline">Coming soon</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Message notifications</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
              <div className="flex justify-between">
                <span>Sound alerts</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
              <div className="flex justify-between">
                <span>Email notifications</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-base-100 border border-base-300 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield size={18} />
                <h3 className="font-medium">Privacy</h3>
              </div>
              <span className="badge badge-outline">Coming soon</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Show online status</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
              <div className="flex justify-between">
                <span>Read receipts</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
            </div>
          </div>

          {/* Storage */}
          <div className="bg-base-100 border border-base-300 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <HardDrive size={18} />
                <h3 className="font-medium">Storage & Data</h3>
              </div>
              <span className="badge badge-outline">Coming soon</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Auto-download media</span>
                <input type="checkbox" className="toggle toggle-sm" disabled />
              </div>
              <div className="flex justify-between">
                <span>Clear cached data</span>
                <button className="btn btn-xs btn-outline" disabled>
                  Clear
                </button>
              </div>
              <div className="flex justify-between text-base-content/70">
                <span>Storage used</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL – THEME ================= */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Theme</h2>
            <p className="text-sm text-base-content/70">
              Choose a theme for your chat interface
            </p>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`p-2 rounded-lg transition-colors
                  ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
                `}
                onClick={() => setTheme(t)}
              >
                <div className="h-8 rounded-md overflow-hidden" data-theme={t}>
                  <div className="grid grid-cols-4 gap-px p-1 h-full">
                    <div className="bg-primary rounded"></div>
                    <div className="bg-secondary rounded"></div>
                    <div className="bg-accent rounded"></div>
                    <div className="bg-neutral rounded"></div>
                  </div>
                </div>
                <p className="text-[11px] mt-1 text-center truncate">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100">
            <div className="p-4 bg-base-200">
              <div className="max-w-lg mx-auto">
                <div className="bg-base-100 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-base-300">
                    <h3 className="font-medium text-sm">John Doe • Online</h3>
                  </div>

                  <div className="p-4 space-y-4 min-h-[180px]">
                    {PREVIEW_MESSAGES.map((m) => (
                      <div
                        key={m.id}
                        className={`flex ${m.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`p-3 rounded-xl max-w-[75%]
                            ${
                              m.isSent
                                ? "bg-primary text-primary-content"
                                : "bg-base-200"
                            }`}
                        >
                          <p className="text-sm">{m.content}</p>
                          <p className="text-[10px] mt-1 opacity-70">12:00 PM</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-base-300 flex gap-2">
                    <input
                      className="input input-bordered flex-1 text-sm"
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
