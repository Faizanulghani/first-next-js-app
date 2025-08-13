"use client";

import DataCard from "./DataCard";
import { useSearchParams } from "next/navigation";

const DataFetchServer = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  if (!userName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ?name=yourname to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <DataCard userName={userName} />;
};

export default DataFetchServer;
