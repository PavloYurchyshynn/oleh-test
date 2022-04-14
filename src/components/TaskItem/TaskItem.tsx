import { ListItem, ListItemText } from "@mui/material";
import { FC, useState } from "react";
import './TaskItem.css';

interface TaskProps {
    id: number
    firstText: string
    adjective: string
    correctAdjective: string
    secondText: string
}

const TaskItem: FC<TaskProps> = ({ id, firstText, adjective, correctAdjective, secondText }) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [counter, setCounter] = useState<number>(0)

    const submit = (e: any) => {
        if (e.key === 'Enter') {
            if (inputValue !== correctAdjective) {
                setCounter(counter + 1)
            }
            if (counter === 2) {
                setInputValue(correctAdjective)
            }
        }
    }

    return (
        <ListItem className="taskLi">
            <div className="emoji">💙</div>
            <div>
                {firstText} ({adjective})
            </div>
            <input
                type="text"
                className={(inputValue === correctAdjective) ? "correctInput" : "itemInput"}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={submit}
                disabled={inputValue === correctAdjective}
            />
            <div className="dots">
                <span className={(inputValue === correctAdjective && counter === 2) ? ("greenDot") : ((counter >= 3) ? "redDot" : "silverDot")}></span>
                <span className={(inputValue === correctAdjective && counter === 1) ? ("greenDot") : ((counter >= 2) ? "redDot" : "silverDot")}></span>
                <span className={(inputValue === correctAdjective && counter === 0) ? ("greenDot") : ((counter >= 1) ? "redDot" : "silverDot")}></span>
            </div>
            <div>{secondText}</div>
        </ListItem>
    );
}

export default TaskItem;