"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Main() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/users/details");
        setUser(res.data);
      } catch (error) {
        alert("Unauthorized. Please login again.");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}