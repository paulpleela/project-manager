import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

function reorderList(sourceList, sourceIndex, destinationIndex) {
  const newCards = Array.from(sourceList.cards);
  const [removed] = newCards.splice(sourceIndex, 1);
  newCards.splice(destinationIndex, 0, removed);

  const newList = { ...sourceList, cards: newCards };
  return newList;
}

export default function Board() {
  const [state, setState] = useState(sampleData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceList = state.lists[source.droppableId];
    const destinationList = state.lists[destination.droppableId];

    let newState;

    if (sourceList.id === destinationList.id) {
      // Reorder cards within the same list
      const newList = reorderList(sourceList, source.index, destination.index);
      newState = {
        ...state,
        lists: { ...state.lists, [newList.id]: newList },
      };
    } else {
      // Move card from one list to another
      const sourceListIndex = Array.from(sourceList.cards);
      const [removed] = sourceListIndex.splice(source.index, 1);
      const newStartList = { ...sourceList, cards: sourceListIndex };

      const destinationListIndex = Array.from(destinationList.cards);
      destinationListIndex.splice(destination.index, 0, removed);
      const newDestinationList = { ...destinationList, cards: destinationListIndex };

      newState = {
        ...state,
        lists: {
          ...state.lists,
          [newStartList.id]: newStartList,
          [newDestinationList.id]: newDestinationList,
        },
      };
    }

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex max-h-[calc(100vh-4rem)] overflow-x-auto no-scrollbar xl:w-3/4">
        {state.listOrder.map((list_id) => {
          const list = state.lists[list_id];
          const cards = list.cards.map((card_id) => state.cards[card_id]);
          return <List key={list.id} list={list} cards={cards} />;
        })}
        <div className="flex items-center justify-center text-4xl text-center font-bold text-stone-600 bg-stone-200 shadow-lg h-auto w-14 shrink-0 ml-3 my-7 px-2 rounded-lg overflow-auto no-scrollbar mr-2">
          +
        </div>
      </div>
    </DragDropContext>
  );
}

const sampleData = {
  cards: {
    1: { id: 1, content: "Do this" },
    2: { id: 2, content: "Do this too" },
    3: { id: 3, content: "Also do this" },
    4: { id: 4, content: "And this" },
    5: { id: 5, content: "This" },
    6: { id: 6, content: "Beh" }
  },
  lists: {
    1: { id: 1, title: "TO-DO", cards: [1, 2, 3, 4, 5, 6]},
    2: { id: 2, title: "IN-PROGRESS", cards: [] },
    3: { id: 3, title: "DONE", cards: [] },
  },
  listOrder: [1, 2, 3],
};
