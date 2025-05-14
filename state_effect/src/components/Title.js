import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false); 
      })
      .catch((error) => {
        console.error("خطا در دریافت پست‌ها:", error);
        setLoading(false); 
      });
  }, []);

//   useEffect(() => {
    
//     const data = async () => {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await res.json();

//         console.log(data);
//     }


//     data();
//   }, [])

  return (
    <div>
      <h2>پست ها</h2>

      {loading ? (
        <p>در حال بارگذاری...</p> 
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
