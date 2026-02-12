// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header
//       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chat-App</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 z-40 w-full h-16 bg-base-100/80 backdrop-blur border-b border-base-300">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Chat-App</span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Settings */}
          <div className="tooltip tooltip-bottom" data-tip="Settings">
            <Link to="/settings" className="btn btn-ghost btn-sm">
              <Settings className="w-4 h-4" />
            </Link>
          </div>

          {authUser && (
            <>
              {/* Profile */}
              <div className="tooltip tooltip-bottom" data-tip="Profile">
                <Link to="/profile" className="btn btn-ghost btn-sm">
                  <User className="w-4 h-4" />
                </Link>
              </div>

              {/* Logout */}
              <div className="tooltip tooltip-bottom" data-tip="Logout">
                <button
                  onClick={logout}
                  className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
