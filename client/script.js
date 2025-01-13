const articleOutputDiv = document.getElementById("articles");

document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location);

  if (url.pathname == "/" || url.pathname.includes("index")) {
    getAllArticles();
  }

  if (url.pathname.includes("article")) {
    getSingleArticle();
  }
});

const getAllArticles = async () => {
  // Reaching out to the backend API and fetching all the articles

  const response = await fetch("http://localhost:8080/api/blogs");

  if (response.ok) {
    // The request was successful, no errors were returned by the server

    const jsonResponse = await response.json();

    const { data: articles } = jsonResponse;

    let articlesHTMLOutput = "";

    articles.forEach((article) => {
      // Do something with each of the articles
      articlesHTMLOutput += `
        <div class="article">
        <img
          src="${article.image}"
          alt=""
          width="300px"
        />

        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="/article.html?id=${article._id}">Read More</a>
      </div>

      <hr />
      `;
    });

    articleOutputDiv.innerHTML = articlesHTMLOutput;
  } else {
    console.error("Error fetching articles:", error);
  }
};

const getSingleArticle = async () => {
  const singleArticleOutput = document.getElementById("article");

  const urlParams = new URLSearchParams(window.location.search);
  const articleID = urlParams.get("id");

  const response = await fetch(
    `http://localhost:8080/api/blogs/single?id=${articleID}`
  );

  const jsonResponse = await response.json();

  const { data: article } = jsonResponse;

  singleArticleOutput.innerHTML = `
    <h2>${article.title}</h2>

    <p>${article.content}</p>
  `;
};

const addArticle = async (articleData) => {
  try {
    const response = await fetch("http://localhost:8080/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
    console.log(response);

    const jsonResponse = await response.json();

    if (response.ok) {
      document.getElementById("success").innerText =
        "Article added successfully!";

      setTimeout(() => {
        document.getElementById("success").innerText = "";
      }, 2000);
      document.getElementById("articleForm").reset();
    } else {
      document.getElementById("fail").innerText = "Failed to add article!";

      setTimeout(() => {
        document.getElementById("fail").innerText = "";
      }, 2000);
      console.error("Error adding article:", jsonResponse);
    }
  } catch (error) {
    console.error("Error while adding article:", error);
    alert("Failed to add article: " + error.message);
  }
};

const submitForm = (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const image = document.getElementById("image").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !description || !image || !content) {
    return alert("All fields are required!");
  }

  const articleData = { title, description, image, content };

  addArticle(articleData);
};

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("articleForm");
//   form.addEventListener("submit", submitForm);
// });
