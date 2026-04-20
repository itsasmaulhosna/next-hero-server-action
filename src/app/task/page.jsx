import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/task";


const Taskpage = async() => {
    const task=await getTasks()
    return (
        <div>
            <h2 className="text-3xl font-bold text-purple-500">Task:{task.length}</h2>
            {
                task.map(tas=><TaskCard key={tas.id} tas={tas}></TaskCard>)
            }
        </div>
    );
};

export default Taskpage;