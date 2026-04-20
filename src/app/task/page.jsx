import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { creatATask } from "@/lib/action";
import { getTasks } from "@/lib/task";


const Taskpage = async() => {
    const task=await getTasks()
    return (
        <div>
            <h2 className="text-3xl font-bold text-purple-500">Task:{task.length}</h2>
            <AddTask creatATask={creatATask}></AddTask>
            <div className='grid grid-cols-3 gap-5 pt-8'>
                {
                task.map(tas=><TaskCard key={tas.id} tas={tas}></TaskCard>)
            }
            </div>
        </div>
    );
};

export default Taskpage;