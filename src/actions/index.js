import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPostandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //aqui ya manda llamar su respectivo reducer
  let array_usuarios = [];
  getState().posts.forEach(post => {
    let temp = array_usuarios.find(value => value === post.userId);
    if (temp === undefined) {
      array_usuarios.push(post.userId);
    }
  });
  array_usuarios.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  //an action that return a function
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
/* 

SOlUTION WITH MEMOIZE

export const fetchUser = id => dispatch => _getFetchData(id, dispatch);

//solution with memoize

const _getFetchData = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
 */
