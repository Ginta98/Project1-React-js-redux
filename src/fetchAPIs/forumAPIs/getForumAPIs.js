export default function getForum() {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/forumPosts?permission=yes&uploadBy=user`
      fetch(url, {
        method: "GET"
      })
        
        .then((response) => response.json())
        .then((res) => {
         
          resolve(res);
          console.log(res)
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  