import { Button } from "@heroui/react";


const Heropage = () => {
    return (
        <div>
           <h2 className="text-4xl text-center font-bold" >Hero page</h2>
           <Button>Hero button</Button>
           <Button variant="secondary">Hero button</Button>
           <Button variant="outline">Hero button</Button>
        </div>
    );
};

export default Heropage;