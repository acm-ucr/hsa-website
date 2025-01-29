import Footer from "@/components/Footer"

const Page = () => {    
    return (
        <>
            <div className="bg-hsa-pink-400 flex flex-row justify-around rounded-2xl">
                <div className="bg-purple-200 flex flex-row gap-5">
                    <div className="bg-gray-300 h-12 w-12" />
                    <p>productboard</p>
                </div>
                <div className="bg-blue-500 flex flex-row gap-5">
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
  