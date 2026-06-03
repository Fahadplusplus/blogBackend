import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const gitData = {
  "login": "Fahadplusplus",
  "id": 186282082,
  "node_id": "U_kgDOCxpwYg",
  "avatar_url": "https://avatars.githubusercontent.com/u/186282082?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Fahadplusplus",
  "html_url": "https://github.com/Fahadplusplus",
  "followers_url": "https://api.github.com/users/Fahadplusplus/followers",
  "following_url": "https://api.github.com/users/Fahadplusplus/following{/other_user}",
  "gists_url": "https://api.github.com/users/Fahadplusplus/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Fahadplusplus/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Fahadplusplus/subscriptions",
  "organizations_url": "https://api.github.com/users/Fahadplusplus/orgs",
  "repos_url": "https://api.github.com/users/Fahadplusplus/repos",
  "events_url": "https://api.github.com/users/Fahadplusplus/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Fahadplusplus/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-10-25T09:57:06Z",
  "updated_at": "2026-05-12T10:59:43Z"
}

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/user",(req ,res)=>{
  res.json(gitData)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});