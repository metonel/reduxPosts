import { FETCH_POSTS, NEW_POST } from "../actions/types";

// export function fetchPost() {
//     return function(dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }));
//     }
// }        sau cu ES6:

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        //dispatching la reducer
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = post => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  })
    .then(res => res.json()) //transformam reapunsu in json
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
