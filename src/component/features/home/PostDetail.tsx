"use client";

const PostDetails = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          {/* Back Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">
          The Big Short War
        </h1>
      </div>

      {/* Author Section */}
      <div className="flex items-center mt-4 gap-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Author Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Zach</p>
          <p className="text-sm text-gray-500">5m ago</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        <p className="text-gray-700 leading-relaxed">
          Tal, athletic, handsome with cerulean eyes, he was the kind of
          hyper-ambitious kid other kids loved to hate and just the type to make
          a big wager on who might go far in life.
        </p>
      </div>

      {/* Add Comment Section */}
      <div className="mt-8">
        <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
          Add Comments
        </button>
      </div>

      {/* Comments Section */}
      <div className="mt-8 space-y-6">
        {[
          {
            id: 1,
            name: "Wittawat98",
            time: "12h ago",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            id: 2,
            name: "Hawaii51",
            time: "1m ago",
            content: "Purus cursus vel at a pretium quam imperdiet.",
          },
          {
            id: 3,
            name: "HeLo_me",
            time: "2m ago",
            content: "Tristique auctor sed semper nibh odio laoreet.",
          },
          {
            id: 4,
            name: "Axe123",
            time: "45m ago",
            content: "Amet mollis eget morbi feugiat nisi fusce.",
          },
        ].map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt={`${comment.name} Avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {comment.name}
              </p>
              <p className="text-xs text-gray-500">{comment.time}</p>
              <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
