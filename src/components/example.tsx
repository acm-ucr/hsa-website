const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 rounded-md bg-red-200 p-10 text-xl">
      <div className="w-1/2 bg-blue-200 p-5 text-center">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="my-10 mr-2 w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
        <div className="my-10 ml-2 w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
