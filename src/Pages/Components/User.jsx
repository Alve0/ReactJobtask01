import React from "react";
import UserImg from "../assets/user.png";
import CameraIcon from "../assets/camra_icon.png";

function User() {
  return (
    <div className="h-screen  bg-gray-100">
      <div className="bg-white p-4 text-2xl shadow-md">Account Setting</div>

      <div className="my-6 p-[10px]">
        <div className="flex items-center gap-5">
          {" "}
          {/* Profile image with camera overlay */}
          <div className="relative w-24 h-24">
            <img
              src={UserImg}
              alt="User"
              className="w-full h-full rounded-full object-cover border-2 border-gray-300"
            />
            <img
              src={CameraIcon}
              alt="Change"
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full  cursor-pointer"
            />
          </div>
          <div>
            <h3 className="font-medium text-lg">Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        {/* Some description text */}
        <div className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          incidunt voluptas unde ad cupiditate ducimus natus, quasi animi autem.
          Nisi nemo distinctio assumenda doloremque soluta molestiae blanditiis,
          magni maxime!
        </div>
      </div>
    </div>
  );
}

export default User;
