import React from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export function PublicLayout() {
  const [sp, ssp] = useSearchParams(0);
  const { id } = useParams();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="1"> Public Layout Links {id} </Link> <br />
            <Link to="2"> Public Layout Links {id} </Link>
            <Link to="${sp}"> Search Params </Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ zone: "public" }} />
      <input
        type="text"
        placeholder="search params"
        onChange={(e) => ssp(e.target.val)}
      />
    </>
  );
}
