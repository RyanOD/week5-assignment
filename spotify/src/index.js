import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Components/Login/Login";
import Asset from "./Components/Asset/Asset";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <header className="global-header">
      <a href={`/`}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE3IiBoZWlnaHQ9IjM1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNDMzIDBhMTcuNDMzIDE3LjQzMyAwIDEwMTcuNDM0IDE3LjQzQzM0Ljg2NCA3LjgwMiAyNy4wNiAwIDE3LjQzNCAwem03Ljk5NSAyNS4xNDVhMS4wODcgMS4wODcgMCAwMS0xLjQ5NS4zNjJjLTQuMDk1LTIuNDk5LTkuMjQ3LTMuMDY3LTE1LjMxNi0xLjY4YTEuMDg3IDEuMDg3IDAgMTEtLjQ4My0yLjExN2M2LjY0MS0xLjUxOCAxMi4zMzctLjg2NSAxNi45MzQgMS45NDIuNTEuMzEzLjY3Mi45OC4zNiAxLjQ5M3ptMi4xMzQtNC43NDdhMS4zNTkgMS4zNTkgMCAwMS0xLjg3NC40NDdjLTQuNjg0LTIuODc5LTExLjgyOS0zLjcxMy0xNy4zNzMtMi4wMzJhMS4zNjEgMS4zNjEgMCAwMS0xLjYzNy0xLjk1IDEuMzYgMS4zNiAwIDAxLjg0OC0uNjVjNi4zMzMtMS45MiAxNC4yMDUtLjk5IDE5LjU4NCAyLjMxOGExLjM2IDEuMzYgMCAwMS40NTIgMS44Njd6bS4xODMtNC45NDJjLTUuNjItMy4zMzEtMTQuODktMy42NDMtMjAuMjU0LTIuMDE2YTEuNjMzIDEuNjMzIDAgMTEtLjk0OC0zLjEyMmM2LjE1OC0xLjg3NCAxNi4zOTgtMS41MDggMjIuODY2IDIuMzMxYTEuNjMgMS42MyAwIDExLTEuNjY0IDIuODA3em0xOS42ODYuNjM5Yy0zLjAxLS43MTgtMy41NC0xLjIyMy0zLjU0LTIuMjkgMC0xIC45NDEtMS42NjYgMi4zNDMtMS42NjYgMS4zNTcgMCAyLjcwNi41MTMgNC4xMTMgMS41NjRhLjIwNS4yMDUgMCAwMC4yMjMuMDA4LjE5My4xOTMgMCAwMC4wNTctLjA1NGwxLjQ3LTIuMDgyYS4yMDguMjA4IDAgMDAtLjAzOC0uMjY4IDguODkyIDguODkyIDAgMDAtNS43ODctMS45OTdjLTMuMjUgMC01LjUyMSAxLjk1Ny01LjUyMSA0Ljc0OSAwIDIuOTkzIDEuOTU5IDQuMDUgNS4zNDEgNC44NjkgMi44ODIuNjY1IDMuMzY3IDEuMjIgMy4zNjcgMi4yMTQgMCAxLjEtLjk4MyAxLjc4NS0yLjU2NSAxLjc4NS0xLjc1NyAwLTMuMTktLjU5LTQuNzg4LTEuOThhLjE5Ni4xOTYgMCAwMC0uMjguMDIxbC0xLjY0OSAxLjk2MWEuMTk2LjE5NiAwIDAwLjAyLjI3MyA5LjgyNSA5LjgyNSAwIDAwNi42MzIgMi41NTVjMy41MDIgMCA1Ljc2NS0xLjkxMyA1Ljc2NS00Ljg3NiAwLTIuNTExLTEuNDk1LTMuODk2LTUuMTYzLTQuNzg2em0xMy4wOTctMi45N2MtMS41MTggMC0yLjc2My41OTgtMy43OTEgMS44MjR2LTEuMzhhLjIwOC4yMDggMCAwMC0uMTk4LS4xOTdoLTIuNzA0YS4yMDguMjA4IDAgMDAtLjE5OC4xOTd2MTUuMzIzYS4yMDkuMjA5IDAgMDAuMTk3LjE5N2gyLjY5NmEuMjA4LjIwOCAwIDAwLjE5OS0uMTk3di00LjgzN2E0Ljg0MiA0Ljg0MiAwIDAwMy44IDEuNzE1YzIuODIgMCA1LjY3Ni0yLjE3IDUuNjc2LTYuMzIxcy0yLjg2Ni02LjMyMy01LjY3Ny02LjMyM3ptMi41MzIgNi4zMjRjMCAyLjExMy0xLjMwMiAzLjU4OS0zLjE2NyAzLjU4OS0xLjg2NiAwLTMuMjMzLTEuNTQzLTMuMjMzLTMuNTkgMC0yLjA0NiAxLjM5MS0zLjU4OSAzLjI0My0zLjU4OSAxLjg1MyAwIDMuMTU3IDEuNTEgMy4xNTcgMy41OXptMTAuNDUyLTYuMzIzYy0zLjYzMyAwLTYuNDc4IDIuNzk4LTYuNDc4IDYuMzY4IDAgMy41NCAyLjgyNiA2LjMgNi40MzMgNi4zIDMuNjQ1IDAgNi41LTIuNzg4IDYuNS02LjM0NSAwLTMuNTU4LTIuODM0LTYuMzI0LTYuNDU1LTYuMzI0em0wIDkuOTM1Yy0xLjkzMiAwLTMuMzg5LTEuNTUzLTMuMzg5LTMuNjFzMS40MDYtMy41NjYgMy4zNDMtMy41NjZjMS45MzkgMCAzLjQxMiAxLjU0NCAzLjQxMiAzLjYxIDAgMi4wNjQtMS40MTUgMy41NTUtMy4zNjYgMy41NTV2LjAxem0xNC4yMTQtOS42OUg4NC43NnYtMy4wMzNhLjIwOC4yMDggMCAwMC0uMTk4LS4xOThoLTIuNjk0YS4yMDguMjA4IDAgMDAtLjE5OC4xOTh2My4wMzRoLTEuMjk3YS4yMDguMjA4IDAgMDAtLjE5Ni4xOTd2Mi4zMTdhLjIwOC4yMDggMCAwMC4xOTYuMTk4aDEuMjk3djUuOTk0YzAgMi40MjEgMS4yMDYgMy42NDkgMy41ODMgMy42NDlhNC45MTggNC45MTggMCAwMDIuNTI1LS42MjQuMTk3LjE5NyAwIDAwLjEtLjE3di0yLjIwN2EuMTk3LjE5NyAwIDAwLS4yODUtLjE3NyAzLjM4NSAzLjM4NSAwIDAxLTEuNTgyLjM4Yy0uODY0IDAtMS4yNS0uMzkzLTEuMjUtMS4yNzJ2LTUuNTc1aDIuOTY3YS4yMDkuMjA5IDAgMDAuMTk2LS4xOTd2LTIuMzE2YS4yMDguMjA4IDAgMDAtLjItLjE5N2guMDAyem0xMC4zMzQuMDEzdi0uMzczYzAtMS4wOTQuNDE2LTEuNTgzIDEuMzYxLTEuNTgzYTQuNTc3IDQuNTc3IDAgMDExLjUyLjI4LjE5Ny4xOTcgMCAwMC4yNi0uMTg3VjkuMjQ4YS4yMTMuMjEzIDAgMDAtLjA0MS0uMTE3LjIwNi4yMDYgMCAwMC0uMDk5LS4wNzMgNy40IDcuNCAwIDAwLTIuMjQtLjMyM2MtMi40OTggMC0zLjgwNiAxLjQwMi0zLjgwNiA0LjA1NHYuNTdIOTMuNzJhLjIwOS4yMDkgMCAwMC0uMjA4LjE5OHYyLjMzYS4yMDkuMjA5IDAgMDAuMjA4LjE5N2gxLjI5NXY5LjI0NWEuMjA4LjIwOCAwIDAwLjE5Ni4xOThoMi42OTZhLjIwOC4yMDggMCAwMC4xOTgtLjE5OHYtOS4yNDdoMi41MThsMy44NTYgOS4yNDRjLS40MzguOTcxLS44NjggMS4xNjQtMS40NTggMS4xNjRhMy4xMDUgMy4xMDUgMCAwMS0xLjQ4Ni0uNDE3LjIwOS4yMDkgMCAwMC0uMTU3LS4wMTUuMjA3LjIwNyAwIDAwLS4xMTYuMTA2bC0uOTEzIDIuMDA2YS4xOTMuMTkzIDAgMDAtLjAwOC4xNDMuMTk5LjE5OSAwIDAwLjA5Mi4xMSA1LjY3OCA1LjY3OCAwIDAwMi44NzkuNzM3YzEuOTkxIDAgMy4wOS0uOTI2IDQuMDYtMy40Mmw0LjY3Ni0xMi4wNzVhLjIwMS4yMDEgMCAwMC0uMDIxLS4xODIuMi4yIDAgMDAtLjE2My0uMDg3aC0yLjgwNmEuMjExLjIxMSAwIDAwLS4xMTQuMDM5LjIxMi4yMTIgMCAwMC0uMDczLjA5NWwtMi44NzUgOC4yMS0zLjE0OC04LjIzYS4xOTQuMTk0IDAgMDAtLjE4My0uMTI2SDk4LjA2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05MS40MzQgMTMuMzcyaC0xLjQyN2EuODMxLjgzMSAwIDAwLS44MzIuODMxdjEwLjQ5MWMwIC40Ni4zNzMuODMyLjgzMi44MzJoMS40MjdjLjQ1OSAwIC44MzEtLjM3My44MzEtLjgzMnYtMTAuNDlhLjgzMS44MzEgMCAwMC0uODMxLS44MzJ6TTkwLjczMyAxMS44ODVhMS45MzQgMS45MzQgMCAxMDAtMy44NjggMS45MzQgMS45MzQgMCAwMDAgMy44Njh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTQuMzQ3IDE3LjE1M2ExLjkgMS45IDAgMDEtMS43NTQtMS4xNzcgMS45MDQgMS45MDQgMCAxMTMuNjYyLS43MyAxLjg5NyAxLjg5NyAwIDAxLTEuMTc1IDEuNzY2IDEuODg2IDEuODg2IDAgMDEtLjczMy4xNHptMC0zLjYxNGExLjcxMiAxLjcxMiAwIDEwMS42OTggMS43MDYgMS42OTcgMS42OTcgMCAwMC0xLjY4Ny0xLjcwNmgtLjAxMXptLjQxNyAxLjkwMmwuNTM3Ljc1MmgtLjQzN2wtLjQ4My0uNjloLS40MTd2LjY5aC0uMzc5VjE0LjJoLjg4N2MuNDYyIDAgLjc2Ni4yMzguNzY2LjYzNmEuNTk0LjU5NCAwIDAxLS40Ni42MDNsLS4wMTQuMDAyem0tLjMxNy0uOWgtLjQ5M3YuNjI1aC40OTNjLjI0NSAwIC4zOTQtLjEyLjM5NC0uMzE1IDAtLjE5Mi0uMTM4LS4zMS0uMzk0LS4zMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
          alt="Spotify"
        />
      </a>
      <h1 className="global-header__heading">API Demo Project</h1>
      <a
        className="global-header__logout"
        href="https://accounts.spotify.com/en/logout"
      >
        Logout
      </a>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:artistSlug/:id" element={<Asset />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
