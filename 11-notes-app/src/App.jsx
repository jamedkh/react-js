import { useState } from "react";
import Heading from "./components/heading";
import { PenLine, Check, Trash2, Plus } from "lucide-react";

const App = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const [note, setNote] = useState([]);

  const handleSubmit = (el) => {
    el.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with input:", inputTitle, inputContent);

    const newNote = [...note];
    newNote.push({
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
    });

    setNote(newNote);
    console.log(newNote);

    setInputTitle("");
    setInputContent("");

    /* 
    const newTask = {
      id: Date.now(),
      title: inputTitle,
      content: inputContent,
    };

    setTask([...task, newTask]); 
    */
  };

  const handleDelete = (idx) => {
    const newNote = [...note];
    newNote.splice(idx, 1);
    setNote(newNote);
    /*
    // const newNote = note.filter((item) => item.id !== id);
     */
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React Js - 11 - Notes App"
          className="text-4xl font-medium py-4 text-white"
        />

        <section className="w-full max-w-md border border-gray-100/40 rounded-lg shadow-md p-6">
          <form
            className="flex flex-col gap-4"
            onSubmit={(el) => {
              handleSubmit(el);
            }}
          >
            <input
              type="text"
              placeholder="Note Title"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-300 border border-gray-600 placeholder-gray-500 bg-gray-800"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />

            <textarea
              placeholder="Enter your note here..."
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-300 border border-gray-600 placeholder-gray-500 bg-gray-800"
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 self-end px-4 py-2 bg-blue-500/40 text-white rounded-md border border-blue-500/40 hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 transition-all duration-500"
            >
              <Plus />
              <span>Add Note</span>
            </button>
          </form>
        </section>

        <section className="w-full max-w-md border border-gray-100/40 rounded-lg shadow-md p-6">
          <Heading
            heading="Notes List"
            className="text-3xl font-medium py-4 text-white"
          />
          <hr className="h-px bg-green-200/20 w-full border-0" />

          <section className="flex flex-col gap-4 py-4">
            {/* dynamically generated notes */}
            {note.map((item, idx) => {
              return (
                <article
                  key={idx}
                  className="bg-gray-800 p-4 rounded-md"
                  id={item.id}
                >
                  <h3 className="text-lg font-semibold text-white border-b border-b-gray-600 pb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 border-b border-b-gray-600/20 pb-1">
                    {item.content}
                  </p>

                  <div className="flex flex-row gap-2 mt-4 justify-end-safe">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-md size-10 inline-flex items-center justify-center"
                      onClick={() => handleDelete(idx)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
