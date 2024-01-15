import { useState } from "react";
import { faker } from "@faker-js/faker";

import "./App.css";
import CommentView from "./CommentView";

function App() {
  const [commentTree, setCommentTree] = useState([
    {
      comment: "when i try to get it, it logs me out. anyone else?",
      userName: faker.internet.userName(),
      avatar: faker.image.avatar(),
      userid: faker.string.uuid(),
      commentDate: "2024-01-14T00:50:23.994Z",
      level: 0,
      reply: [],
    },
    {
      comment: "Systems probably overloaded",
      userName: faker.internet.userName(),
      avatar: faker.image.avatar(),
      userid: faker.string.uuid(),
      commentDate: faker.date.recent({ days: 2 }),
      level: 0,
      reply: [
        {
          comment:
            "How do they have sever issues when they have a game like Fortnite that has such a huge online player base? Makes no sense.",
          userName: faker.internet.userName(),
          avatar: faker.image.avatar(),
          userid: faker.string.uuid(),
          commentDate: faker.date.recent({ days: 2 }),
          level: 1,
          reply: [
            {
              comment: "I got no clue",
              userName: faker.internet.userName(),
              avatar: faker.image.avatar(),
              userid: faker.string.uuid(),
              commentDate: faker.date.recent({ days: 2 }),
              level: 2,
              reply: [
                {
                  comment:
                    "Last time when I have seen problems like this it was when Epic gave us GTA V 😃So, i am guessing that Death Stranding is really big deal.",
                  userName: faker.internet.userName(),
                  avatar: faker.image.avatar(),
                  userid: faker.string.uuid(),
                  commentDate: faker.date.recent({ days: 2 }),
                  level: 3,
                  reply: [],
                },
                {
                  comment: "I can't even access my library.",
                  userName: faker.internet.userName(),
                  avatar: faker.image.avatar(),
                  userid: faker.string.uuid(),
                  commentDate: faker.date.recent({ days: 2 }),
                  level: 3,
                  reply: [],
                },
              ],
            },
            {
              comment:
                "Where's the guy that was saying its going to be raji an hour ago? lol",
              userName: faker.internet.userName(),
              avatar: faker.image.avatar(),
              userid: faker.string.uuid(),
              commentDate: faker.date.recent({ days: 2 }),
              level: 1,
              reply: [],
            },
          ],
        },
      ],
    },
    {
      comment: "this is my trying\n",
      userName: "Malvina_Huel38",
      avatar: "https://avatars.githubusercontent.com/u/59307865",
      userid: faker.string.uuid(),
      commentDate: faker.date.recent({ days: 2 }),
      level: 0,
      reply: [],
    },
  ]);

  return (
    <>
      <CommentView commentTree={commentTree}></CommentView>
    </>
  );
}

export default App;
