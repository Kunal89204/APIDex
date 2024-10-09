// src/components/Layout.jsx
import { LayoutProps } from "@/types/types";
// import { Button } from "./ui/button";
import { UserButton} from "@clerk/clerk-react";


const Layout:React.FC<LayoutProps> = ({ children }) => {


  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-64 bg-black border-r border-r-gray-700 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl">APIDex</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">
                Item 2
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">
                Item 3
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-black shadow text-white">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-5xl">Welcome <span className="text-transparent bg-gradient-to-r from-[#FDC830] via-[#F37335] to-[#D93C7A] bg-clip-text">Kunal</span></h2>
      
            <div>
            <UserButton />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
