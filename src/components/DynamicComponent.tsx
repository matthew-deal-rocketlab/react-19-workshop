import React from "react";

// Function to simulate fetching data
const fetchData = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is dynamically loaded content!");
    }, 2000);
  });

// Define the shape of the resource object
interface Resource<T> {
  read: () => T;
}

// Create a resource-like object for Suspense
const createResource = <T,>(promise: Promise<T>): Resource<T> => {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let error: any; // To capture any potential errors

  const suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (err) => {
      status = "error";
      error = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw error;
      return result;
    },
  };
};

// Create the resource
const resource = createResource(fetchData());

const DynamicComponent: React.FC = () => {
  const data = resource.read();
  return <div className="p-5 rounded-md shadow-md">{data}</div>;
};

export default DynamicComponent;
