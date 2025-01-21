const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex-inital grid w-2/3 place-items-center gap-10 rounded-lg bg-red-200 p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-2xl">Some</div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center text-2xl">
          {props.text3}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center text-2xl">
          {props.text3}
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 p-5 text-center text-2xl text-white">
        Here
      </div>
    </div>
  );
};

export default Example;
