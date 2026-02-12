// // import { useState } from "react";
// // import { useAuthStore } from "../store/useAuthStore";
// // import { Camera, Mail, User } from "lucide-react";

// // const ProfilePage = () => {
// //   const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
// //   const [selectedImg, setSelectedImg] = useState(null);

// //   const handleImageUpload = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();

// //     reader.readAsDataURL(file);

// //     reader.onload = async () => {
// //       const base64Image = reader.result;
// //       setSelectedImg(base64Image);
// //       await updateProfile({ profilePic: base64Image });
// //     };
// //   };

// //   return (
// //     <div className="h-screen pt-20">
// //       <div className="max-w-2xl mx-auto p-4 py-8">
// //         <div className="bg-base-300 rounded-xl p-6 space-y-8">
// //           <div className="text-center">
// //             <h1 className="text-2xl font-semibold ">Profile</h1>
// //             <p className="mt-2">Your profile information</p>
// //           </div>

// //           {/* avatar upload section */}

// //           <div className="flex flex-col items-center gap-4">
// //             <div className="relative">
// //               <img
// //                 src={selectedImg || authUser.profilePic || "/avatar.png"}
// //                 alt="Profile"
// //                 className="size-32 rounded-full object-cover border-4 "
// //               />
// //               <label
// //                 htmlFor="avatar-upload"
// //                 className={`
// //                   absolute bottom-0 right-0 
// //                   bg-base-content hover:scale-105
// //                   p-2 rounded-full cursor-pointer 
// //                   transition-all duration-200
// //                   ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
// //                 `}
// //               >
// //                 <Camera className="w-5 h-5 text-base-200" />
// //                 <input
// //                   type="file"
// //                   id="avatar-upload"
// //                   className="hidden"
// //                   accept="image/*"
// //                   onChange={handleImageUpload}
// //                   disabled={isUpdatingProfile}
// //                 />
// //               </label>
// //             </div>
// //             <p className="text-sm text-zinc-400">
// //               {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
// //             </p>
// //           </div>

// //           <div className="space-y-6">
// //             <div className="space-y-1.5">
// //               <div className="text-sm text-zinc-400 flex items-center gap-2">
// //                 <User className="w-4 h-4" />
// //                 Full Name
// //               </div>
// //               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
// //             </div>

// //             <div className="space-y-1.5">
// //               <div className="text-sm text-zinc-400 flex items-center gap-2">
// //                 <Mail className="w-4 h-4" />
// //                 Email Address
// //               </div>
// //               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
// //             </div>
// //           </div>

// //           <div className="mt-6 bg-base-300 rounded-xl p-6">
// //             <h2 className="text-lg font-medium  mb-4">Account Information</h2>
// //             <div className="space-y-3 text-sm">
// //               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
// //                 <span>Member Since</span>
// //                 <span>{authUser.createdAt?.split("T")[0]}</span>
// //               </div>
// //               <div className="flex items-center justify-between py-2">
// //                 <span>Account Status</span>
// //                 <span className="text-green-500">Active</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default ProfilePage;
// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Camera, Mail, User } from "lucide-react";
// import axios from "axios";

// const ProfilePage = () => {
//   const {
//     authUser,
//     isUpdatingProfile,
//     updateProfile,
//     logout,
//   } = useAuthStore();

//   const [selectedImg, setSelectedImg] = useState(null);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = async () => {
//       const base64Image = reader.result;
//       setSelectedImg(base64Image);
//       await updateProfile({ profilePic: base64Image });
//     };
//   };

//   const handleDeleteAccount = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );

//     if (!confirmDelete) return;

//     try {
//       await axios.delete(
//         `${import.meta.env.VITE_API_BASE_URL}/auth/delete`,
//         { withCredentials: true }
//       );

//       logout();
//     } catch (error) {
//       console.error("Delete account failed:", error);
//       alert("Failed to delete account");
//     }
//   };

//   return (
//     <div className="h-screen pt-20">
//       <div className="max-w-2xl mx-auto p-4 py-8">
//         <div className="bg-base-300 rounded-xl p-6 space-y-8">
//           <div className="text-center">
//             <h1 className="text-2xl font-semibold">Profile</h1>
//             <p className="mt-2">Your profile information</p>
//           </div>

//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <img
//                 src={selectedImg || authUser.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="size-32 rounded-full object-cover border-4"
//               />
//               <label
//                 htmlFor="avatar-upload"
//                 className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
//                   isUpdatingProfile
//                     ? "animate-pulse pointer-events-none"
//                     : ""
//                 }`}
//               >
//                 <Camera className="w-5 h-5 text-base-200" />
//                 <input
//                   type="file"
//                   id="avatar-upload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   disabled={isUpdatingProfile}
//                 />
//               </label>
//             </div>
//             <p className="text-sm text-zinc-400">
//               {isUpdatingProfile
//                 ? "Uploading..."
//                 : "Click the camera icon to update your photo"}
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
//                 {authUser?.fullName}
//               </p>
//             </div>

//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
//                 {authUser?.email}
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 bg-base-300 rounded-xl p-2">
//             <h2 className="text-lg font-medium mb-4">Account Information</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
//                 <span>Member Since</span>
//                 <span>{authUser.createdAt?.split("T")[0]}</span>
//               </div>
//               <div className="flex items-center justify-between py-2">
//                 <span>Account Status</span>
//                 <span className="text-green-500">Active</span>
//               </div>
//             </div>
//           </div>

//           {/* DELETE ACCOUNT */}
//           <div className="pt-0 border-zinc-600">
//             <button
//               onClick={handleDeleteAccount}
//               className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
//             >
//               Delete Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import axios from "axios";
import {
  Camera,
  Mail,
  User,
  ShieldAlert,
  Calendar,
  Trash2,
  CircleDot,
} from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile, logout } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "This will permanently delete your account. This action cannot be undone."
    );

    if (!confirmed) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/auth/delete`,
        { withCredentials: true }
      );

      logout();
    } catch (error) {
      console.error("Delete account failed:", error);
      alert("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-base-200">
      <div className="max-w-5xl mx-auto">
        <div className="bg-base-100 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch min-h-[520px]">

          {/* LEFT PANEL */}
          <div className="flex flex-col items-center text-center gap-6 border-r border-base-300 md:pr-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-base-300"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-1 right-1 p-2 rounded-full bg-base-content text-base-100
                  cursor-pointer hover:scale-105 transition
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera size={18} />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>

            <p className="text-sm text-base-content/60">
              {isUpdatingProfile ? "Uploading..." : "Change profile photo"}
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 text-sm">
              <CircleDot className="text-green-500" size={16} />
              <span className="text-green-500 font-medium">Online</span>
            </div>

            <span className="badge badge-success badge-outline">
              Active Account
            </span>

            {/* Danger Zone */}
            <div className="w-full mt-auto p-4 rounded-xl border border-error/30 bg-error/5">
              <h3 className="flex items-center gap-2 text-error font-semibold mb-3">
                <ShieldAlert size={18} />
                Danger Zone
              </h3>

              <button
                onClick={handleDeleteAccount}
                className="btn btn-error btn-sm w-full gap-2"
              >
                <Trash2 size={16} />
                Delete Account
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="md:col-span-2 flex flex-col justify-center h-full">
            <div className="space-y-6 mt-6">
              <div>
                <h1 className="text-2xl font-semibold">Profile</h1>
                <p className="text-base-content/60">
                  Your account information
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-base-content/60">
                  <User size={16} />
                  Full Name
                </div>
                <div className="input input-bordered w-full bg-base-200 cursor-not-allowed">
                  {authUser.fullName}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-base-content/60">
                  <Mail size={16} />
                  Email Address
                </div>
                <div className="input input-bordered w-full bg-base-200 cursor-not-allowed">
                  {authUser.email}
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-base-200">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <Calendar size={16} />
                    Member Since
                  </div>
                  <p className="font-medium mt-1">
                    {authUser.createdAt?.split("T")[0]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-base-200">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <ShieldAlert size={16} />
                    Account Status
                  </div>
                  <p className="font-medium mt-1 text-green-500">Active</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
