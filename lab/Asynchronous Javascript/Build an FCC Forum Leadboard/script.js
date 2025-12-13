const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const timeAgo = (isoTime) => {
  const now = new Date();
  const dateSince = new Date(isoTime);
  const diff = now.getTime() - dateSince.getTime();

  const diffDays = parseInt(diff / (1000 * 60 * 60 * 24));
  const remainDays = diff % (1000 * 60 * 60 * 24);

  const diffHours = parseInt(remainDays / (1000 * 60 * 60));
  const remainHours = remainDays % (1000 * 60 * 60);

  const diffMin = parseInt(remainHours / (1000 * 60));

  switch (true) {
    case diffDays > 0:
      return `${diffDays}d ago`;
    case diffHours > 0:
      return `${diffHours}h ago`;
    case diffMin > 0:
      return `${diffMin}m ago`;
  }
};

const viewCount = (nbrViews) => {
  return nbrViews >= 1000 ? `${Math.floor(nbrViews / 1000)}k` : nbrViews;
};

const forumCategory = (id) => {
  if (!allCategories.hasOwnProperty(id)) {
    allCategories[id] = {
      category: "General",
      className: "general",
    };
  }
  return `<a class="category ${allCategories[id].className}" href="${forumCategoryUrl}${allCategories[id].className}/${id}">${allCategories[id].category}</a>`;
};

const avatars = (posterArr, usersArr) => {
  return posterArr
    .map((poster) => {
      const checkID = usersArr.find((u) => u.id === poster.user_id);
      if (checkID) {
        checkID.avatar_template = checkID.avatar_template.replace(
          /\{size\}/,
          30
        );
        return `<img src="${avatarUrl}${checkID.avatar_template}" alt="${checkID.name}"/>`;
      }
    })
    .join("");
};

const postsContainer = document.getElementById("posts-container");

const showLatestPosts = (obj) => {
  obj.topic_list.topics.forEach(
    (topic) =>
      (postsContainer.innerHTML += `<tr>
  <td>
  <a href="${forumTopicUrl}${topic.slug}/${topic.id}" class="post-title">${
        topic.title
      }</a>
  ${forumCategory(topic.category_id)}
  </td>
  <td>
  <div class="avatar-container">${avatars(topic.posters, obj.users)}</div>
  </td>
  <td>${topic.posts_count - 1}
  </td>
  <td>${viewCount(topic.views)}</td>
  <td>${timeAgo(topic.bumped_at)}</td>
  </tr>`)
  );
};

const fetchData = () => {
  fetch(forumLatest)
    .then((res) => res.json())
    .then((data) => {
      showLatestPosts(data);
    })
    .catch((err) => console.log("Error fetch", err));
};
