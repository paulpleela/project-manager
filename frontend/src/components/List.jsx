import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

export default function List(props) {
  return (
    <Droppable droppableId={props.list.id.toString()}>
      {(droppableProvided, droppableSnapshot) => (
        <div
          className="bg-stone-200 shadow-lg h-auto w-80 shrink-0 ml-4 my-7 px-2 rounded-lg overflow-auto no-scrollbar"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <div className="text-lg font-bold bg-stone-200 sticky top-0 w-full p-1">
            {props.list.title}
          </div>
          {Object.values(props.cards).map((card, index) =>
            card ? (
              <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <Card key={card.id} content={card.content} />
                  </div>
                )}
              </Draggable>
            ) : null
          )}
          <div className="text-3xl text-center font-bold text-stone-500 bg-white shadow w-70 shrink-0 mt-3 pb-1 mb-2 rounded-lg">
            +
          </div>
        </div>
      )}
    </Droppable>
  );
}
