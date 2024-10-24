import { Board, useKanbanContext } from '../../context/kanban-context'

type BoardProps = {
    board: Board,
    index: number
}

export default function BoardSelect({ board, index }: BoardProps) {
    const { boardSelected, dispatch } = useKanbanContext();

    const isSelected = boardSelected! - 1 === index;

    return (
        <li
            key={index}
            className={`flex w-64 h-12 gap-y-2 gap-x-4 rounded-r-full items-center cursor-pointer ${isSelected ? "bg-main-purple opacity-100" : "hover:bg-main-purple/10 dark:hover:bg-white group"}`}
            onClick={() => dispatch({ type: "SET_BOARDSELECTED", payload: (index + 1)})}
        >
            <svg width="12" height="12" className={`w-4 h-4 ml-8 text-medium-grey ${isSelected ? "text-white" : "group-hover:text-main-purple "}`}>
                <path fill="currentColor" d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
            </svg>
            <p className={`text-Heading-M text-medium-grey ${isSelected ? "text-white" : "group-hover:text-main-purple"}`}>{board.name}</p>
        </li>
    );
}
    
