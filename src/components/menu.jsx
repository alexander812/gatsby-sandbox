import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      {
        allSitePage {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `}
    render={({ allSitePage: { edges } }) => (
      <ul>
        {edges.map(({ node: { id, path } }) => (
          <li key={id}>
            <Link to={path}>{id}</Link>
          </li>
        ))}
      </ul>
    )}
  />
);
// export default () => (
//   <div>
//     <ul>
//       <li>
//         <Link to="/">home</Link>
//       </li>
//       <li>
//         <Link to="/how-to">how-to</Link>
//       </li>
//       <li>
//         <Link to="/how-to/start-project">start-project</Link>
//       </li>
//     </ul>
//   </div>
// );
