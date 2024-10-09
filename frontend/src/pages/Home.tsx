import Table from "@/components/Table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

const Home = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleCreate = () => {
    // Function to handle the creation logic
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    // You can add your logic here to handle the data
    // Reset inputs after submission if needed
    setInput1('');
    setInput2('');
  };

  return (
    <div className="bg-black text-white p-6">
      <div className="flex w-full justify-between items-center mb-4">
        <h2 className="text-3xl">Your Projects</h2>
        <Dialog>
          <DialogTrigger className="bg-gray-950 hover:bg-gray-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded border border-gray-900">
           New Project
          </DialogTrigger>
          <DialogContent className="bg-black border border-gray-900 rounded-lg p-6">
            <DialogHeader>
              <DialogTitle className="text-lg text-white font-semibold">Create New Project</DialogTitle>
              <DialogDescription className="mt-2">
                Enter details to create a new project.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <label className="block text-gray-400 mb-2" htmlFor="input1">Project Name</label>
              <input
                id="input1"
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="w-full bg-black border border-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter first field"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-400 mb-2" htmlFor="input2">Description</label>
              <textarea
                id="input2"
                rows={3}
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="w-full bg-black border border-gray-900 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter second field"
              />
            </div>
            <DialogFooter className="flex justify-end mt-4">
              <DialogClose className="mr-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded border border-gray-900">
                Cancel
              </DialogClose>
              <button
                onClick={handleCreate}
                className="bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-gray-900"
              >
                Create
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default Home;
