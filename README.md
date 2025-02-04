# NewsHive 📰

A responsive news website built using Html,Css,Js and NewsAPI that allows users to browse the latest headlines from different categories.

## Features

1. **Responsive Design**: Fully responsive design that works well on both desktop and mobile devices.
   
3. **News Fetching from API**: The website fetches news articles dynamically using the NewsAPI. The API provides articles based on different queries (like "latest", "technology", "sports", etc). The fetched news includes:
   - Article image
   - Title
   - Description
   - Source (News Publisher)
   - Publication date
   - Clicking on a news article opens the full article in a new tab.
     
4. **Search Functionality**:
   - Users can search for news articles based on keywords.
   - The search input accepts queries, and pressing "Enter" or clicking the search button triggers the search.
   - The search works with API calls to fetch relevant news based on the entered keyword.
     
5. **Loading Indicator**:
    - A loading indicator ("Loading...") appears while fetching data from the API.
    - This improves user experience by signaling that data is being fetched.
      
6. **Simple, Clean UI with Modern Design**:
    - The website uses a minimalistic, modern design with clean typography, well-organized content, and a color theme based on your style (including shades of blue).
    - The color palette includes a primary accent color for interactive elements and a soft color scheme for backgrounds and borders.
  
## 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Create a newsApi key from NewsApi website and copy it

```bash
  https://newsapi.org/
```

Now,Replace the Api key in the script.js file

```bash
  const API_KEY = "<Your Api key"";
```

Now run the website
