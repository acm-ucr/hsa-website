const Page = () => {
  return (
    <>
      <div className="flex flex-row justify-around rounded-2xl bg-hsa-pink-400">
        <div className="flex flex-row gap-5 bg-purple-200">
          <div className="h-12 w-12 bg-gray-300" />
          <p>productboard</p>
        </div>
        <div className="flex flex-row gap-5 bg-blue-500">
          <p>features</p>
          <p>pricing</p>
          <p>blog</p>
          <p>about</p>
        </div>
      </div>
      <div className="bg-red-400">textbox</div>
      <div className="bg-green-200">picture of guy</div>
    </>
  );
};

export default Page;
