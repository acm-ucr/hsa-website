const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="m-5 w-2/3 flex-row place-items-center gap-1 space-y-8 rounded-lg bg-red-200 p-8 font-medium">
      <div className="w-1/2 bg-blue-200 p-4 text-center">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-2">
        <div className="w-full rounded-full bg-blue-400 p-4 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-4 text-center">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-1/2 bg-blue-700 p-4 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
