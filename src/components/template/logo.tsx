export default function Logo() {
  return (
    <div className="bg-gray-100 h-16 w-16 rounded-full flex flex-col justify-center items-center dark:bg-gray-700">
      <div className="h-4 w-4 rounded-full bg-blue-500 mb-0.5 dark:bg-gray-500"></div>
      <div className="flex mt-0.5">
        <div className="h-4 w-4 rounded-full bg-blue-700 mr-0.5 dark:bg-gray-800"></div>
        <div className="h-4 w-4 rounded-full bg-blue-900 ml-0.5 dark:bg-gray-900"></div>
      </div>
    </div>
  );
}
