# 📋 Git Workflow Cheatsheet

## From Local Setup to Branching & Collaboration

| **Step** | **Command** | **Explanation** |
|---------|-------------|-----------------|
| 1️⃣ | `mkdir my-project && cd my-project` | Create and navigate to your project folder |
| 2️⃣ | `git init` | Initialize an empty local Git repository |
| 3️⃣ | `echo "# My Project" > README.md` | Create a basic file |
| 4️⃣ | `git add .` | Stage all changes/files |
| 5️⃣ | `git commit -m "Initial commit"` | Commit staged changes |
| 6️⃣ | `git branch -M main` | Rename default branch to `main` (force) |
| 7️⃣ | `git remote add origin https://github.com/your-username/my-project.git` | Connect to the GitHub remote repo |
| 8️⃣ | `git push -u origin main` | Push local `main` to GitHub and track it |
| 9️⃣ | `git checkout -b feature/my-feature` | Create and switch to a new feature branch |
| 🔟 | `git add . && git commit -m "Add feature"` | Save changes to the new branch |
| 11️⃣ | `git push -u origin feature/my-feature` | Push feature branch to GitHub |
| 12️⃣ | `git pull` | Pull latest changes (if on the same branch) |
| 13️⃣ | `git checkout main` | Switch back to `main` branch |
| 14️⃣ | `git pull origin main` | Make sure local `main` is up to date |
| 15️⃣ | `git merge feature/my-feature` | Merge changes from feature into main |
| 16️⃣ | `git push origin main` | Push merged changes to GitHub |
| 17️⃣ | `git branch -d feature/my-feature` | Delete the local feature branch |
| 18️⃣ | `git push origin --delete feature/my-feature` | Delete the remote feature branch |
