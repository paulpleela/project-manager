import { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

export default function List(props) {
  const [formData, setFormData] = useState({
    content: "",
    targetDate: "",
    targetTime: "",
  });

  function addCard() {
    const newCard = {
      id: uuidv4(),
      content: formData.content,
      targetDate: formData.targetDate,
      targetTime: formData.targetTime,
    };
    props.onAddCard(newCard);
    setFormData({
      content: "",
      targetDate: "",
      targetTime: "",
    });
    document.getElementById("add_card").close();
  }

  return (
    <>
      <Droppable droppableId={props.list.id.toString()}>
        {(droppableProvided) => (
          <div className="bg-stone-200 shadow-lg h-auto w-80 shrink-0 ml-3 my-7 px-2 rounded-lg overflow-auto no-scrollbar">
            <div className="text-lg font-bold bg-stone-200 sticky top-0 w-full p-1">
              {props.list.title}
            </div>
            <div
              className="h-[70vh]"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {Object.values(props.cards).map((card, index) =>
                card ? (
                  <Draggable
                    key={card.id}
                    draggableId={card.id.toString()}
                    index={index}
                  >
                    {(draggableProvided) => (
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
              <div
                className="text-3xl text-center font-bold text-stone-500 bg-white shadow w-70 shrink-0 pb-1 rounded-lg cursor-pointer"
                onClick={() => document.getElementById("add_card").showModal()}
              >
                +
              </div>
            </div>
          </div>
        )}
      </Droppable>

      <dialog id="add_card" className="modal">
        <div className="modal-box bg-gray-200 p-3 xl:p-5">
          <h3 className="font-bold text-lg mb-2">New Card</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            addCard();
          }}>
            <label htmlFor="content" className="sr-only">
              Card message
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              placeholder="Card message..."
              maxLength="255"
              rows="4"
              className="rounded w-full px-1 placeholder-black mb-1"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            />
            <label htmlFor="target" className="sr-only">
              Target date
            </label>
            <div className="flex">
              <input
                type="date"
                id="target_date"
                name="targetDate"
                className="rounded w-2/3 px-1 mr-2"
                value={formData.targetDate}
                onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                required
              />
              <input
                type="time"
                id="target_time"
                name="targetTime"
                className="rounded w-1/3 px-1"
                value={formData.targetTime}
                onChange={(e) => setFormData({ ...formData, targetTime: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-1 px-4 rounded mt-3 float-right"
            >
              Add Card
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => document.getElementById("add_card").close()}>close</button>
        </form>
      </dialog>
    </>
  );
}
