import React from "react";

const commentsData = [
  {
    name: "vibhor",
    text: "my name is anthong gons ervice",
    replies: [
      {
        name: "vibhor",
        text: "my name is anthong gons ervice",
        replies: [
          {
            name: "vibhor",
            text: "my name is anthong gons ervice",
            replies: [
              {
                name: "vibhor",
                text: "my name is anthong gons ervice",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "vibhor",
    text: "my name is anthong gons ervice",
    replies: [
      {
        name: "vibhor",
        text: "my name is anthong gons ervice",
        replies: [],
      },
    ],
  },
  {
    name: "vibhor",
    text: "my name is anthong gons ervice",
    replies: [],
  },
  {
    name: "vibhor",
    text: "my name is anthong gons ervice",
    replies: [
      {
        name: "vibhor",
        text: "my name is anthong gons ervice",
        replies: [
          {
            name: "vibhor",
            text: "my name is anthong gons ervice",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-gray-100 ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-3">
      <img
        className="h-8 w-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFHxMW90_mQU2eor-m9-EfFOa6o2WHJ_6hujXYa6BMZbYuuDPhPEF2Z8&s"
        alt="user"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
