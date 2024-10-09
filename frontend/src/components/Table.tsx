import React from 'react';

const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-black p-4 rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-950">
          <tr>
            <th className="text-left text-gray-200 p-3">Name</th>
            <th className="text-left text-gray-200 p-3">Desc</th>
            <th className="text-left text-gray-200 p-3">CreatedAt</th>
          </tr>
        </thead>
        <tbody className="bg-black text-gray-400">
          <tr className="border-b border-gray-900">
            <td className="p-3">APIDex</td>
            <td className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorem?</td>
            <td className="p-3">02-0802923</td>
          </tr>
          <tr className="border-b border-gray-900">
            <td className="p-3">Another Item</td>
            <td className="p-3">Description for another item.</td>
            <td className="p-3">02-0802924</td>
          </tr>
          {/* You can add more rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
