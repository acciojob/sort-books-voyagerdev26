
import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { loading_state,book_success,book_failure,sorting } from "../redux/actions/actionCreators";
import './../styles/App.css';

const App = () => {
  const apiKey = "q0nYvyBGZDdUcQJaKsuILaZlyn2I1raBmfWWDc9RZaq3KxKd"; // Insert your key here
  const listName = 'hardcover-fiction'; 
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${apiKey}`;



  let {loading,data,error}= useSelector(state=>state.bookInfo);

  let [sortBy,setSortBy]= useState("title");
  let [sortOrder,setSortOrder]= useState("ascending")
  
  let dispatch= useDispatch();


  useEffect(()=>{
    dispatch(loading_state());
    fetch(url).then(response=>response.json()).then(data=>{
      const books= data.results.books;
      // console.log(books);
      dispatch(book_success(books));
    }).catch(error=>{
      dispatch(book_failure(error));
    })

  },[])

  if(loading){
    return (
      <div>Loading...</div>
    )
  }
  else if(error){
    return (
      <div>{error}</div>
    )
  }
  else{

    return (
      <div>


           {/* First Dropdown */}
          <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value);dispatch(sorting(e.target.value, sortOrder))}}>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
          </select>

          {/* Second Dropdown */}
          <select value={sortOrder} onChange={(e)=>{setSortOrder(e.target.value);dispatch(sorting(sortBy, e.target.value))}}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>


          <table>
            <thead>
              <tr>

                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(obj=><tr key={obj.title}>
                  <td>{obj.title}</td>
                  <td>{obj.author}</td>
                  <td>{obj.publisher}</td>
                  <td>{obj.isbns[0].isbn13}</td>
                </tr>)
              }
            </tbody>
          </table>
      </div>
    )
  }
  }

export default App
